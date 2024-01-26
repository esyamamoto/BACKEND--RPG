import Race from './Race';

class Orc extends Race {
  private MAXLifePoints = 74;
  private static CREATEDRacesInstances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.CREATEDRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this.MAXLifePoints;
  }

  static createdRacesInstances(): number {
    return this.CREATEDRacesInstances;
  }
}

export default Orc;