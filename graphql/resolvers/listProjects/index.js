exports.handler = async (event) => {
  return [
    {
      id: Date.now().toString(),
      name: "Project 1",
      createdAt: null,
      updatedAt: null,
    },
    {
      id: Date.now().toString(),
      name: "Project 2",
      createdAt: null,
      updatedAt: null,
    },
  ];
};
