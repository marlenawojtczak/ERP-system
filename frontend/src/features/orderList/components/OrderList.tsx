import React, { useState, useEffect } from "react";

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

interface FormDataType {
  name: string;
  order: string;
  priority: boolean;
}

export const OrderList = () => {
  const [projects, setProjects] = useState<[string, FormDataType][]>([]);
  const [searchProject, setSearchProject] = useState("");
  const [selectedTodayButton, setSelectedTodayButton] = useState("");
  const [isWeekSelected, setIsWeekSelected] = useState("");
  const [selectedHereButton, setSelectedHereButton] = useState(false);
  const [selectedToGoButton, setSelectedToGOButton] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("savedObjects");
    const savedProjects = savedData ? JSON.parse(savedData) : [];
    const showProjects = savedProjects.map((project: any) => [
      "Zdjęcia projektu",
      project,
    ]);
    setProjects(showProjects);
  }, []);

  const getImageUrls = (project: any) => {
    const imageInfo = project.imageInfo;
    if (imageInfo && Object.keys(imageInfo).length > 0) {
      return Object.keys(imageInfo).map((key) => imageInfo[key].sourcePath);
    }
    return [];
  };

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
          {projects.map(([_, project], index) => (
            <li key={index}>
              <ProjectImage className={project.priority ? "priority" : ""}>
                {getImageUrls(project).map((url, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={url}
                    alt={`Project ${project} Image ${imgIndex}`}
                  />
                ))}
              </ProjectImage>
              <ProjectIems className={project.priority ? "priority" : ""}>
                <p>
                  <span className="label">Nazwa: </span>
                  <span className="value">{project.name}</span>
                </p>

                <p>
                  <span className="label">Zamówienie: </span>
                  <span className="value">{project.order}</span>
                </p>
              </ProjectIems>
            </li>
          ))}
        </ul>
      </ProjectList>
    </Wrapper>
  );
};
