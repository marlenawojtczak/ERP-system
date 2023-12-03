import kawusia from "../assets/images/kawusia.jpg";

const ExamplePage = () => {
  return (
    <>
      <div>
        <ul style={{ fontWeight: 700 }}>
          Aby wyświetlić tutaj zawartość modułu nad którym pracujesz należy:
          <hr style={{ marginBottom: 30 }} />
          <li>
            1. dodać sekcję w panelu bocznym
            <li style={{ marginLeft: 40 }}>- src/layouts/SideBar.tsx</li>
            <li style={{ marginLeft: 40 }}>
              - tworzysz nazwę sekcji i za pomocą "Link" podpinasz route, do
              którego będzie nas przekierowywało po kliknięciu w nazwę sekcji
            </li>
          </li>
          <li>
            2. utworzyć swój Page i wrzucić w niego swoje komponenty
            <li style={{ marginLeft: 40 }}>- src/pages/TwójPage.tsx</li> 3.
            podłączyć swój Page w App.tsx
            <li style={{ marginLeft: 40 }}>- src/App.tsx</li>
            <li style={{ marginLeft: 40 }}>
              - importujesz przez lazy-loading swój Page
            </li>
            <li style={{ marginLeft: 40 }}>
              - dodajesz swój Route:{" "}
              <code style={{ fontSize: 18, color: "#474747" }}>
                {" "}
                &lt;Route path="nazwaTwojegoRoute" element=
                {"{NazwaTwojegoPage}"} /&gt;{" "}
              </code>
            </li>
          </li>
        </ul>
        <hr style={{ marginBottom: 30, marginTop: 30 }} />
        <ul
          style={{ fontWeight: 700, listStyleType: "square", marginLeft: 20 }}
        >
          <li>interfejs aplikacji ma być w całości po polsku</li>
          <li>
            szkice widoków podstron znajdują się pod tym{" "}
            <a href="https://excalidraw.com/#json=ki9MfyrAlS0YhEG4SwIMO,Df7dCHWLgKwj2bmDrmkJvg">
              Linkiem
            </a>
          </li>
        </ul>
        <hr style={{ marginBottom: 30, marginTop: 30 }} />
        <p>MIŁEGO DNIA! ORAZ</p>
        <img src={kawusia} alt="smaczej kawusi" />
      </div>
    </>
  );
};

export default ExamplePage;
