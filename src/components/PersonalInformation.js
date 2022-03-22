function PersonalInformation(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm">
            <h2 className="mt-2">{props.personalInfo.fullName}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="lead">{props.personalInfo.jobTitle}</p>
          </div>
        </div>
        <div className="row text-muted">
          <div className="col-sm">
            <p className="m-0">{props.personalInfo.address}</p>
            <p>{props.personalInfo.email}</p>
          </div>
          <div className="col-sm">
            <p className="m-0">
              {props.personalInfo.city}, {props.personalInfo.postCode}
            </p>
            <p>{props.personalInfo.phoneNumber}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            {props.personalInfo.socialMedia.map((social, index) => {
              return (
                <a
                  key={index}
                  className="btn btn-md btn-outline-primary"
                  href={social.url}
                  target="_blank"
                  role="button"
                  rel="noreferrer"
                >
                  {social.siteName}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col">
        <img
          src={props.personalInfo.profilePictureUrl}
          alt="Profile"
          className="border border-secondary profile-picture rounded-circle"
        ></img>
      </div>
    </div>
  );
}

export default PersonalInformation;
