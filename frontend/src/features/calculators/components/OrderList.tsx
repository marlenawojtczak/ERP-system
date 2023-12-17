import React, { useState } from "react";
import { format } from "date-fns";

import {
  Wrapper,
  ControlPanel,
  StyledInput,
  ButtonPanel,
  StyledButtons,
  ButtonNow,
  ButtonWeek,
  ButtonToGo,
  ButtonHere,
  ProjectList,
  ProjectImage,
  ProjectIems,
} from "./OrderList.styled";

interface ProjectDetails {
  Nazwa: string;
  Termin: Date;
  Metraż: string;
  Wysyłka: string;
  Zamówienie: number;
}

const formatDate = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

const exampleProjects: [string, ProjectDetails][] = [
  [
    "ProjektX1",
    {
      Nazwa: "Shop1",
      Termin: new Date("2023/01/01"),
      Metraż: "6mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 20230101001,
    },
  ],
  [
    "ProjektX2",
    {
      Nazwa: "Shop2",
      Termin: new Date("2023/02/02"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 20230202002,
    },
  ],
  [
    "ProjektX3",
    {
      Nazwa: "Shop3",
      Termin: new Date("2023/03/03"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 3,
    },
  ],
  [
    "ProjektX4",
    {
      Nazwa: "Shop4",
      Termin: new Date("2023/04/04"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 4,
    },
  ],
  [
    "ProjektX5",
    {
      Nazwa: "Shop5",
      Termin: new Date("2023/05/05"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 5,
    },
  ],
  [
    "ProjektX6",
    {
      Nazwa: "Shop6",
      Termin: new Date("2023/06/06"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 6,
    },
  ],
  [
    "ProjektX7",
    {
      Nazwa: "Shop7",
      Termin: new Date("2023/07/07"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 7,
    },
  ],
  [
    "ProjektX8",
    {
      Nazwa: "Shop8",
      Termin: new Date("2023/08/08"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 8,
    },
  ],
  [
    "ProjektX9",
    {
      Nazwa: "Shop9",
      Termin: new Date("2023/09/09"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 9,
    },
  ],
  [
    "ProjektX10",
    {
      Nazwa: "Shop10",
      Termin: new Date("2023/10/10"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 10,
    },
  ],
  [
    "ProjektX11",
    {
      Nazwa: "Shop11",
      Termin: new Date("2023/11/11"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 11,
    },
  ],
  [
    "ProjektX12",
    {
      Nazwa: "Shop12",
      Termin: new Date("2023/12/12"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 12,
    },
  ],
  [
    "ProjektX13",
    {
      Nazwa: "Shop13",
      Termin: new Date("2023/01/13"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 13,
    },
  ],
  [
    "ProjektX14",
    {
      Nazwa: "Shop14",
      Termin: new Date("2023/02/14"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 14,
    },
  ],
  [
    "ProjektX15",
    {
      Nazwa: "Shop15",
      Termin: new Date("2023/03/15"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 15,
    },
  ],
  [
    "ProjektX16",
    {
      Nazwa: "Shop16",
      Termin: new Date("2023/04/16"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 16,
    },
  ],
  [
    "ProjektX17",
    {
      Nazwa: "Shop17",
      Termin: new Date("2023/12/11"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 17,
    },
  ],
  [
    "ProjektX18",
    {
      Nazwa: "Shop18",
      Termin: new Date("2024/06/18"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 18,
    },
  ],
  [
    "ProjektX19",
    {
      Nazwa: "Shop19",
      Termin: new Date("2024/07/10"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 9919,
    },
  ],
];

export const OrderList = () => {
  const [searchProject, setSearchProject] = useState("");
  const [selectedButton, setSelectedButton] = useState("");
  const [isWeekSelected, setIsWeekSelected] = useState(false);
  const [active, setActive] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProject(event.target.value);
  };

  const handleTodayButton = () => {
    if (selectedButton === "Na dziś") {
      setSelectedButton("");
      setActive(!active);
    } else {
      setSelectedButton("Na dziś");
    }
  };

  const handleWeekButton = () => {
    setIsWeekSelected(!isWeekSelected);
  };

  // for Today

  const filteredProjects = exampleProjects.filter((project) => {
    const { Nazwa, Termin, Metraż, Wysyłka, Zamówienie } = project[1];
    const searchProjectLower = searchProject.toLowerCase();
    const terminFormatted = formatDate(Termin);

    if (selectedButton === "Na dziś") {
      let today = new Date();
      const projectDate = new Date(Termin);

      if (
        projectDate.getDate() === today.getDate() &&
        projectDate.getMonth() === today.getMonth() &&
        projectDate.getFullYear() === today.getFullYear()
      ) {
        return (
          Nazwa.toLowerCase().includes(searchProjectLower) ||
          terminFormatted.includes(searchProjectLower) ||
          Metraż.toLowerCase().includes(searchProjectLower) ||
          Wysyłka.toLowerCase().includes(searchProjectLower) ||
          Zamówienie.toString().includes(searchProjectLower)
        );
      }
    } else {
      return (
        Nazwa.toLowerCase().includes(searchProjectLower) ||
        terminFormatted.includes(searchProjectLower) ||
        Metraż.toLowerCase().includes(searchProjectLower) ||
        Wysyłka.toLowerCase().includes(searchProjectLower) ||
        Zamówienie.toString().includes(searchProjectLower)
      );
    }
  });

  // for Week

  return (
    <Wrapper>
      <ControlPanel>
        <StyledInput
          type="text"
          value={searchProject}
          onChange={handleInputChange}
          placeholder="Wyszukaj projekt"
        />
        <ButtonPanel>
          <StyledButtons>
            <ButtonNow onClick={handleTodayButton}>Na dziś</ButtonNow>
            <ButtonWeek onClick={handleWeekButton}>Na tydzień</ButtonWeek>
          </StyledButtons>
          <StyledButtons>
            <ButtonToGo>Na wynos</ButtonToGo>
            <ButtonHere>U nas</ButtonHere>
          </StyledButtons>
        </ButtonPanel>
      </ControlPanel>
      <ProjectList>
        <ul>
          {filteredProjects.map(([projectName, project], index) => (
            <li key={index}>
              <ProjectImage>{projectName}</ProjectImage>
              <ProjectIems>
                <p>
                  <span className="label">Nazwa: </span>
                  <span className="value">{project.Nazwa}</span>
                </p>
                <p>
                  <span className="label">Termin: </span>
                  <span className="value">{formatDate(project.Termin)}</span>
                </p>
                <p>
                  <span className="label">Metraż: </span>
                  <span className="value">{project.Metraż}</span>
                </p>
                <p>
                  <span className="label">Wysyłka: </span>
                  <span className="value">{project.Wysyłka}</span>
                </p>
                <p>
                  <span className="label">Zamówienie: </span>
                  <span className="value">{project.Zamówienie}</span>
                </p>
              </ProjectIems>
            </li>
          ))}
        </ul>
      </ProjectList>
    </Wrapper>
  );
};
