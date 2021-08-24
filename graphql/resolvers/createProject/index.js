exports.handler = async (event) => {
  const {
    arguments: {
      input: { name },
    },
    identity: { sub },
  } = event;

  return {
    id: Date.now().toString(),
    name: `${name} (userId: ${sub})`,
    createdAt: null,
    updatedAt: null,
  };
};
