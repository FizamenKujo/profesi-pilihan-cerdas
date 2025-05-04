
import { Interest, Rule, Talent, rules } from "../data/expertData";

// Forward chaining inference engine
export const inferProfessions = (interest: Interest, talent: Talent): {
  professions: string[];
  description: string;
} => {
  // Find the matching rule
  const matchedRule = rules.find(
    (rule) => rule.interest === interest && rule.talent === talent
  );

  // Return the professions if a matching rule is found
  if (matchedRule) {
    return {
      professions: matchedRule.professions,
      description: matchedRule.description || ""
    };
  }

  // Return empty array if no matching rule is found
  return {
    professions: [],
    description: "Tidak ada rekomendasi profesi yang sesuai dengan kombinasi minat dan bakat yang dipilih."
  };
};

// Get all professions in the system
export const getAllProfessions = (): string[] => {
  const allProfessions = rules.flatMap(rule => rule.professions);
  return [...new Set(allProfessions)]; // Remove duplicates
};

// Get professions details (which interests and talents lead to it)
export const getProfessionDetails = (professionName: string): {
  profession: string;
  matchingPaths: {
    interest: Interest;
    talent: Talent;
  }[];
} => {
  const matchingRules = rules.filter(rule => 
    rule.professions.includes(professionName)
  );
  
  const matchingPaths = matchingRules.map(rule => ({
    interest: rule.interest,
    talent: rule.talent
  }));
  
  return {
    profession: professionName,
    matchingPaths
  };
};

// Find all professions by interest
export const getProfessionsByInterest = (interest: Interest): string[] => {
  const matchingRules = rules.filter(rule => rule.interest === interest);
  const professions = matchingRules.flatMap(rule => rule.professions);
  return [...new Set(professions)]; // Remove duplicates
};

// Find all professions by talent
export const getProfessionsByTalent = (talent: Talent): string[] => {
  const matchingRules = rules.filter(rule => rule.talent === talent);
  const professions = matchingRules.flatMap(rule => rule.professions);
  return [...new Set(professions)]; // Remove duplicates
};
