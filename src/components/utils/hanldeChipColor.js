export const getChipColor = (type, value) => {
  if (type === "evaluation") {
    const evaluationColorMap = {
      Excellent: "success",
      Good: "primary",
      Satisfactory: "warning",
      "Needs Improvement": "error",
    };

    return evaluationColorMap[value] || "default";
  } else if (type === "monthlyTarget") {
    switch (true) {
      case value >= "90%":
        return "success";
      case value >= "70%":
        return "primary";
      case value >= "50%":
        return "warning";
      default:
        return "error";
    }
  }

  return "default";
};
