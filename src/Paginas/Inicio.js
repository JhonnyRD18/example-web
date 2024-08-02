import React from "react";
import Slider from "../Componentes/Slider";
import Pie from "../Componentes/Pie";

export const Inicio = () => {
  return (
    <div>
      <Slider />
      <div className="container cuerpo mt-4 mb-4">
        <div className="row">
          <div className="col-lg-4">
            {/* edita el href="por tu video" */}
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns=""
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href="imagen1.jpg" width="100%" height="100%" />
            </svg>

            <h2 className="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
          </div>

          <div className="col-lg-4">
            {/* edita el href="por tu video" */}
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns=""
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href="imagen1.jpg" width="100%" height="100%" />
            </svg>

            <h2 className="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
          </div>

          <div className="col-lg-4">
            {/* edita el href="por tu video" */}
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns=""
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <image href="imagen1.jpg" width="100%" height="100%" />
            </svg>

            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              First featurette heading.{" "}
              <span className="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Some great placeholder content for the first featurette here.
              Imagine some exciting prose here.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="imagen1.jpg"
              alt="Descripción de la imagen"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="imagen1.jpg"
              alt="Descripción de la imagen"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>

      <Pie />
    </div>
  );
};

export default Inicio;
