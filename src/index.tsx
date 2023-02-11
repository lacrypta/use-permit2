interface UsePermit2Return {
  hasAllowance: boolean;
  pipo: number;
  pepe: number;
}

export const usePermit2 = (): UsePermit2Return => {
  const hasAllowance = true;
  const pipo = 600;
  const pepe = 554545;
  return { hasAllowance, pipo, pepe };
};

export default usePermit2;
