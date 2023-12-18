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

const exampleProjects: [string, ProjectDetails][] = [
  [
    "ProjektX1",
    {
      Nazwa: "Shop1",
      Termin: new Date("2024/05/13"),
      Metraż: "6mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 20230101001,
      naWynos: false,
      uNas: true,
      Priorytet: false,
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
      naWynos: false,
      uNas: true,
      Priorytet: false,
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
      naWynos: false,
      uNas: true,
      Priorytet: false,
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
      naWynos: false,
      uNas: true,
      Priorytet: false,
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
      naWynos: false,
      uNas: true,
      Priorytet: true,
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
      naWynos: false,
      uNas: true,
      Priorytet: false,
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
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX8",
    {
      Nazwa: "Shop8",
      Termin: new Date("2023/12/18"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 8,
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX9",
    {
      Nazwa: "Shop9",
      Termin: new Date("2023/12/10"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 9,
      naWynos: false,
      uNas: true,
      Priorytet: true,
    },
  ],
  [
    "ProjektX10",
    {
      Nazwa: "Shop10",
      Termin: new Date("2023/12/10"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 10,
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX11",
    {
      Nazwa: "Shop11",
      Termin: new Date("2023/12/11"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 11,
      naWynos: false,
      uNas: true,
      Priorytet: false,
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
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX13",
    {
      Nazwa: "Shop13",
      Termin: new Date("2023/12/13"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 13,
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX14",
    {
      Nazwa: "Shop14",
      Termin: new Date("2023/12/14"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 14,
      naWynos: true,
      uNas: false,
      Priorytet: false,
    },
  ],
  [
    "ProjektX15",
    {
      Nazwa: "Shop15",
      Termin: new Date("2023/12/15"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 15,
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX16",
    {
      Nazwa: "Shop16",
      Termin: new Date("2023/12/16"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 16,
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX17",
    {
      Nazwa: "Shop17",
      Termin: new Date("2023/12/17"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 17,
      naWynos: false,
      uNas: true,
      Priorytet: false,
    },
  ],
  [
    "ProjektX18",
    {
      Nazwa: "Shop18",
      Termin: new Date("2023/12/18"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 18,
      naWynos: true,
      uNas: false,
      Priorytet: false,
    },
  ],
  [
    "ProjektX19",
    {
      Nazwa: "Shop19",
      Termin: new Date("2023/12/19"),
      Metraż: "4mb, r.40",
      Wysyłka: "paczkomat",
      Zamówienie: 9919,
      naWynos: false,
      uNas: true,
      Priorytet: true,
    },
  ],
];

interface ProjectDetails {
  Nazwa: string;
  Termin: Date;
  Metraż: string;
  Wysyłka: string;
  Zamówienie: number;
  naWynos: boolean;
  uNas: boolean;
  Priorytet: boolean;
}

const formatDate = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

const isTodayProject = (projectDate: Date) => {
  const today = new Date();
  return (
    projectDate.getDate() === today.getDate() &&
    projectDate.getMonth() === today.getMonth() &&
    projectDate.getFullYear() === today.getFullYear()
  );
};

const isThisWeekProject = (projectDate: Date) => {
  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(
    today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -7 : 1)
  );
  const endOfWeek = new Date(today);
  endOfWeek.setDate(startOfWeek.getDate() + 5);
  return projectDate >= startOfWeek && projectDate <= endOfWeek;
};

export const OrderList = () => {
  const [searchProject, setSearchProject] = useState("");
  const [selectedTodayButton, setSelectedTodayButton] = useState("");
  const [isWeekSelected, setIsWeekSelected] = useState("");
  const [selectedHereButton, setSelectedHereButton] = useState(false);
  const [selectedToGoButton, setSelectedToGOButton] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProject(event.target.value);
  };

  const handleTodayButton = () => {
    if (selectedTodayButton) {
      setSelectedTodayButton("");
    } else {
      setSelectedTodayButton("Na dziś");
      setIsWeekSelected("");
    }
  };

  const handleWeekButton = () => {
    if (isWeekSelected) {
      setIsWeekSelected("");
    } else {
      setIsWeekSelected("Na tydzień");
      setSelectedTodayButton("");
    }
  };

  const handleHereButton = () => {
    if (!selectedHereButton) {
      setSelectedHereButton(true);
      setSelectedToGOButton(false);
    } else {
      setSelectedHereButton(false);
      setSelectedToGOButton(false);
    }
  };

  const handleToGoButton = () => {
    if (!selectedToGoButton) {
      setSelectedToGOButton(true);
      setSelectedHereButton(false);
    } else {
      setSelectedHereButton(false);
      setSelectedToGOButton(false);
    }
  };

  const filteredProjects = exampleProjects.filter(([_, project]) => {
    const { Nazwa, Termin, Metraż, Wysyłka, Zamówienie, naWynos, uNas } =
      project;
    const searchProjectLower = searchProject.toLowerCase();
    const terminFormatted = formatDate(Termin);

    const isToday = selectedTodayButton && isTodayProject(Termin);
    const isThisWeek = isWeekSelected && isThisWeekProject(Termin);

    const isToGo = selectedToGoButton && naWynos;
    const isHere = selectedHereButton && uNas;

    const matchesSearch =
      Nazwa.toLowerCase().includes(searchProjectLower) ||
      terminFormatted.includes(searchProjectLower) ||
      Metraż.toLowerCase().includes(searchProjectLower) ||
      Wysyłka.toLowerCase().includes(searchProjectLower) ||
      Zamówienie.toString().includes(searchProjectLower);

    return (
      (isToday || isThisWeek || (!selectedTodayButton && !isWeekSelected)) &&
      (isToGo || isHere || (!selectedToGoButton && !selectedHereButton)) &&
      matchesSearch
    );
  });

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
            <ButtonNow
              onClick={handleTodayButton}
              className={selectedTodayButton ? "active" : ""}
            >
              Na dziś
            </ButtonNow>
            <ButtonWeek
              onClick={handleWeekButton}
              className={isWeekSelected ? "active" : ""}
            >
              Na tydzień
            </ButtonWeek>
          </StyledButtons>
          <StyledButtons>
            <ButtonToGo
              onClick={handleToGoButton}
              className={selectedToGoButton ? "active" : ""}
            >
              Na wynos
            </ButtonToGo>
            <ButtonHere
              onClick={handleHereButton}
              className={selectedHereButton ? "active" : ""}
            >
              U nas
            </ButtonHere>
          </StyledButtons>
        </ButtonPanel>
      </ControlPanel>
      <ProjectList>
        <ul>
          {filteredProjects.map(([projectName, project], index) => (
            <li key={index}>
              <ProjectImage className={project.Priorytet ? "priority" : ""}>
                {projectName}
              </ProjectImage>
              <ProjectIems className={project.Priorytet ? "priority" : ""}>
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
