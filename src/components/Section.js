function Section(props) {
  return (
    <div>
      {props.sections.map((section, index) => {
        return (
          <div className="card mb-3" key={index}>
            <div className="card-header bg-dark text-white">
              {section.header}
            </div>
            <div className="card-body">
              <h5 className="card-title">{section.bodyTitle}</h5>
              <pre className="card-text">{section.bodyDescription}</pre>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
