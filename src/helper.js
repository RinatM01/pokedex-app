const cap = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
const typeColors = {
  normal: 'bg-[#AAAA9B]',
  fire: 'bg-[#DA5035]',
  water: 'bg-[#6198F8]',
  electric: 'bg-[#EECE55]',
  grass: 'bg-[#8CC760]',
  ice: 'bg-[#80CAFA]',
  fighting: 'bg-[#AE5B4A]',
  poison: 'bg-[#9F5A96]',
  ground: 'bg-[#D8BC65]',
  flying: 'bg-[#8B98F8]',
  psychic: 'bg-[#DC5F97]',
  bug: 'bg-[#ADBA44]',
  rock: 'bg-[#B8AB6F]',
  ghost: 'bg-[#6667B6]',
  dragon: 'bg-[#7568E6]',
  dark: 'bg-[#725647]',
  steel: 'bg-[#AAAABA]',
  fairy: 'bg-[#E29DE9]',
};

export { cap, typeColors };
