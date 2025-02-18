"use-client";

export default function PersonalInfo({ change, formData, errors = {} }) {
  return (
    <div>
      <div className="flex flex-col">
        <img src="/download.svg" width="60" height="60" />

        <h1 className="mb-5 font-bold text-xl">Join Us!</h1>
        <h2 className="mb-10">
          Please provide all current information accurately.
        </h2>
        <h1>First name</h1>
        <input
          type="text"
          name="firstName"
          placeholder="Your first name"
          onChange={change}
          value={formData.firstName}
          className="mb-2 p-2 border"
        />
        {errors.firstName && (
          <span className="text-red-500">{errors.firstName}</span>
        )}

        <h1>Last name</h1>
        <input
          type="text"
          name="lastName"
          placeholder="Your last name"
          onChange={change}
          value={formData.lastName}
          className="mb-2 p-2 border"
        />
        {errors.lastName && (
          <span className="text-red-500">{errors.lastName}</span>
        )}

        <h1>Username</h1>
        <input
          type="text"
          name="userName"
          placeholder="Your username"
          value={formData.userName}
          onChange={change}
          className="mb-2 p-2 border"
        />
        {errors.userName && (
          <span className="text-red-500">{errors.userName}</span>
        )}
      </div>
    </div>
  );
}
