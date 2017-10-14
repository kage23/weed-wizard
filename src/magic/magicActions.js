export const CAST_SPELL = 'CAST_SPELL';

export function castSpell (spell) {
  return {
    type: CAST_SPELL,
    spell
  };
}
