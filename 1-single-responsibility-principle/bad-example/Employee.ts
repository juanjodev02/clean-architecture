/**
 * DUPLICACIÓN ACCIDENTAL
 * Esta clase vulnerable a la duplicación accidental
 * porque tiene tres métodos responsables ante tres
 * actores muy diferentes.
 */

class BadEmployee {
  public calculatePay(): number {return 0;}

  public reportHours(): number {return 0;}

  public save(): void {}
}