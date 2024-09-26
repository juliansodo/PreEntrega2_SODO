import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context";
import {
  Step,
  Stepper,
  StepIndicator,
  StepDescription,
  StepTitle,
  StepSeparator,
  StepNumber,
  StepIcon,
  StepStatus,
  Box,
  useSteps,
  Heading,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import CartProductListComponent from "../components/Carrito/CartProductListComponent";
import FormFacturacion from "../components/checkout/FormFacturacion";
import FinalStep from "../components/checkout/FinalStep";

const steps = [
  { title: "Paso 1", description: "Confirmar carrito" },
  { title: "Paso 2", description: "Datos de facturación" },
  { title: "Paso 3", description: "Confirmación de pago" },
];

export function CheckoutPage() {
  const { cart, finalAmount } = useContext(CartContext);
  const [personData, setPersonData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [activeNextStep, setActiveNextStep] = useState(true);
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Box maxW={"5xl"} mx={"auto"} mt={"2rem"}>
      <Stepper index={activeStep} mb={"3rem"}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 ? (
        <CheckoutStep1
          cart={cart}
          finalAmount={finalAmount}
          setActiveNextStep={setActiveNextStep}
        />
      ) : null}
      {activeStep === 1 ? (
        <CheckoutStep2
          setPersonData={setPersonData}
          setActiveNextStep={setActiveNextStep}
          personData={personData}
        />
      ) : null}
      {activeStep === 2 ? (
        <CheckoutStep3
          setActiveNextStep={setActiveNextStep}
          personData={personData}
          cart={cart}
          finalAmount={finalAmount}
        />
      ) : null}
      <Flex>
        <Box>
          {activeStep > 0 ? (
            <Button onClick={() => goToPrevious()}>Anterior</Button>
          ) : (
            <></>
          )}
        </Box>
        <Spacer />
        <Box>
          {activeStep < 2 ? (
            <Button onClick={() => goToNext()} isDisabled={!activeNextStep}>
              Siguiente
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

function CheckoutStep1({ cart, finalAmount, setActiveNextStep }) {
  useEffect(() => {
    setActiveNextStep(cart.length > 0);
  }, [cart]);
  return (
    <Box maxH={"lg"} minH={"lg"}>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Carrito
      </Heading>
      <CartProductListComponent tipo={"lista"} cart={cart} />
      <Box textAlign={"right"} mt={"1rem"}>
        <Heading size={"md"}>Total: ${finalAmount}</Heading>
      </Box>
    </Box>
  );
}

function CheckoutStep2({ setPersonData, setActiveNextStep, personData }) {
  return (
    <Box maxH={"500px"} minH={"500px"}>
      <FormFacturacion
        setPersonData={setPersonData}
        setActiveNextStep={setActiveNextStep}
        personData={personData}
      />
    </Box>
  );
}

function CheckoutStep3({ cart, finalAmount, personData }) {
  return (
    <Box mb={"1rem"}>
      <FinalStep
        cart={cart}
        finalAmount={finalAmount}
        personData={personData}
        btnsAddOrRmv={false}
      />
    </Box>
  );
}
