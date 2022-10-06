export const trimUrl = (link) => {
  return `/${link.split("/")[6]}`;
};
export const takeAbilitisOfPokemon = (pokemon) => {
  const result = [];

  pokemon?.abilities.forEach((item) => {
    result.push(item.ability.name);
  });
  return result;
};
