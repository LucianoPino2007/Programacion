#calculadora
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    return a / b

while True:
    print("Calculadora")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")
    
    opcion = input("Seleccione una opción: ")

    if opcion == "5":
        break
    
    if opcion not in ["1", "2", "3", "4"]:
        print("Opción inválida")
        continue
    
    num1 = float(input("Ingrese el primer número: "))
    num2 = float(input("Ingrese el segundo número: "))
    
    if opcion == "1":
        resultado = sumar(num1, num2)
        print("El resultado de la suma es:", resultado)
    elif opcion == "2":
        resultado = restar(num1, num2)
        print("El resultado de la resta es:", resultado)
    elif opcion == "3":
        resultado = multiplicar(num1, num2)
        print("El resultado de la multiplicación es:", resultado)
    elif opcion == "4":
        if num2 == 0:
            print("Error: No se puede dividir entre cero")
        else:
            resultado = dividir(num1, num2)
            print("El resultado de la división es:", resultado)
    elif opcion == "5"
    break
    print