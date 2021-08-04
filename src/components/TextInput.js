import React from "react";

export default function TextInput({
  value,
  onChange,
  type = "text",
  placeholder = "YPur PLaceholder",
  inputSVG,
  TopDivClassName = "EachInputDiv",
  inputClass = "",
  suffixSVG = null,
  error,
  onBlur,
}) {
  return (
    <>
      <div className={TopDivClassName}>
        <img src={inputSVG} alt=""></img>
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          onBlur={onBlur}
        ></input>
        {suffixSVG ? (
          <img className="ShowSvg" src={suffixSVG} alt=""></img>
        ) : null}
      </div>
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
    </>
  );
}
