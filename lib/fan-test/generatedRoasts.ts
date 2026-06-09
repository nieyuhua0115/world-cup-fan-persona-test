import {
  generatedFanRoasts,
  type GeneratedFanRoast,
} from "../../data/fan-test/generatedRoasts";
import type { FanPersonaCode } from "../../data/fan-test/types";

export function getGeneratedFanRoast(
  personaCode: FanPersonaCode,
  nationalTeamId: string,
): GeneratedFanRoast | undefined {
  return generatedFanRoasts[personaCode]?.[nationalTeamId];
}

