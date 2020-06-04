import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import api from "./services/api";
import formatValue from "./utils/formatValue";
import GlobalStyle from "./globalStyles";

import { Container, ResultContainer } from "./styles";

const logo = require("./assets/logo-black-white.svg");

interface IAvailableAreaMatch {
  from: number;
  to: number[];
}

interface IPackages {
  id: number;
  name: string;
}

interface ISimulation {
  withPackage: number;
  withoutPackage: number;
}

const App: React.FC = () => {
  const [availableAreaMatches, setAvailableMatches] = useState<
    IAvailableAreaMatch[]
  >([
    {
      from: 11,
      to: [16, 17, 18],
    },
    {
      from: 16,
      to: [11],
    },
    {
      from: 17,
      to: [11],
    },
    {
      from: 18,
      to: [11],
    },
  ]);

  const [selectedArea, setSelectedArea] = useState<IAvailableAreaMatch>(
    {} as IAvailableAreaMatch
  );

  const [packages, setPackages] = useState<IPackages[]>([
    {
      id: 1,
      name: "FaleMais 30",
    },
    {
      id: 2,
      name: "FaleMais 60",
    },
    {
      id: 3,
      name: "FaleMais 120",
    },
  ]);

  const [result, setResult] = useState<ISimulation | undefined>(undefined);

  const { handleSubmit, register, getValues } = useForm();

  const onSubmit = useCallback(async (data): Promise<void> => {
    const schema = Yup.object().shape({
      from_city_code: Yup.number().required(),
      to_city_code: Yup.number().required(),
      minutes: Yup.number().required(),
      package_id: Yup.number().required(),
    });

    try {
      await schema.validate(data, { abortEarly: false });

      const response = await api.post("/calls", {
        from_city_code: parseInt(data.from_city_code),
        to_city_code: parseInt(data.to_city_code),
        minutes: parseInt(data.minutes),
        package_id: parseInt(data.package_id),
      });

      setResult(response.data);
    } catch (err) {
      console.log(err);
      toast.error("Erro ao simular, cheque seus dados e tente novamente");
    }
  }, []);

  const handleAreaSelection = useCallback(
    (e) => {
      const areaCode = parseInt(e.target.value);

      const index = availableAreaMatches.findIndex(
        (findArea) => findArea.from === areaCode
      );

      setSelectedArea(availableAreaMatches[index]);
    },
    [availableAreaMatches]
  );

  return (
    <>
      <Container>
        <img alt="Vórtx" src={logo} />

        {!result && (
          <div>
            <h1>Planos FaleMais</h1>
            <h2>Simulador de Custo de Chamadas</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="fromArea">DDD de origem</label>
                <select
                  ref={register}
                  id="fromArea"
                  name="from_city_code"
                  onChange={handleAreaSelection}
                >
                  <option value={undefined} selected disabled>
                    Escolha uma área
                  </option>
                  <option value={11}>011</option>
                  <option value={16}>016</option>
                  <option value={17}>017</option>
                  <option value={18}>018</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="toArea">DDD de destino</label>
                <select id="toArea" name="to_city_code" ref={register}>
                  {!selectedArea.to && (
                    <option value={undefined} disabled selected>
                      Escolha a origem
                    </option>
                  )}

                  {selectedArea.to &&
                    selectedArea.to?.map((areaOption) => (
                      <option key={Math.random()} value={areaOption}>
                        {"0" + areaOption}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label htmlFor="package">Plano à simular</label>
                <select id="package" name="package_id" ref={register}>
                  {packages.map((phonePackage) => (
                    <option key={Math.random()} value={phonePackage.id}>
                      {phonePackage.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="minutes">Tempo de ligação</label>
                <input
                  type="number"
                  id="minutes"
                  name="minutes"
                  min={0}
                  placeholder="Insira o tempo em minutos"
                  ref={register}
                />
              </div>

              <button>Simular</button>
            </form>
          </div>
        )}

        {result && (
          <ResultContainer>
            <h1>Custo da ligação</h1>
            <span>
              <strong>Com o pacote: </strong>
              {formatValue(result.withPackage)}
            </span>

            <span>
              <strong>Sem o pacote: </strong>
              {formatValue(result.withoutPackage)}
            </span>

            <button onClick={() => setResult(undefined)}>
              Repetir Simulação
            </button>
          </ResultContainer>
        )}
      </Container>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};

export default App;
