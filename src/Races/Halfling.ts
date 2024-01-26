import Race from './Race';

class Halfling extends Race {
  private MAXLifePoints = 60;
  private static CREATEDRacesInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.CREATEDRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.MAXLifePoints;
  }

  static createdRacesInstances(): number {
    return this.CREATEDRacesInstances;
  }
}

export default Halfling;