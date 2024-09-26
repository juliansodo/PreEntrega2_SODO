import { useState, useEffect } from "react";
import { Heading, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormFacturacion({ setPersonData, setActiveNextStep, personData }) {
  const [personDataState, setPersonDataState] = useState(personData);
  useEffect(() => {
    setActiveNextStep(
        personDataState.firstName != "" &&
        personDataState.lastName != "" &&
        personDataState.email != "" &&
        personDataState.phone != ""
    );
  }, [personDataState, setActiveNextStep]);
  useEffect(() => {
    setPersonData(personDataState);
  }, [personDataState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonDataState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Heading w="100%" textAlign="center" fontWeight="normal" mb="2%">
        Datos de facturación
      </Heading>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="firstName" fontWeight="normal">
            Nombre
          </FormLabel>
          <Input
            id="firstName"
            name="firstName"
            value={personDataState.firstName}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="lastName" fontWeight="normal">
            Apellido
          </FormLabel>
          <Input
            id="lastName"
            name="lastName"
            value={personDataState.lastName}
            onChange={handleChange}
            placeholder="Apellido"
          />
        </FormControl>
      </Flex>

      <Flex gap="2%">
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight="normal">
            Email
          </FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={personDataState.email}
            onChange={handleChange}
            placeholder="Pepitogrillo@gmail.com"
          />
        </FormControl>

        <FormControl mt="2%">
          <FormLabel htmlFor="phone" fontWeight="normal">
            Teléfono
          </FormLabel>
          <Input
            id="phone"
            name="phone"
            value={personDataState.phone}
            onChange={handleChange}
            placeholder="12345678"
          />
        </FormControl>
      </Flex>
    </div>
  );
}
