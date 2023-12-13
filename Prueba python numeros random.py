import random

def juegoAdivinanza():
    numeroRandom = random.randint(1, 10)
    intentos = []

    for i in range(10):
        intento = int(input("Adivina el número: "))
        intentos.append(intento)

        if intento == numeroRandom:
            print(f"¡Felicidades! Adivinaste el número en {len(intentos)} intentos.")
            break
        elif intento < numeroRandom:
            print("El número es más alto.")
            
        elif intento > numeroRandom:
            print("El número es más bajo.")

juegoAdivinanza()