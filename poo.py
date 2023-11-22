class Rectangulo:
    def __init__(self,longitud,ancho):
        self.longitud = longitud
        self.ancho = ancho
        
    def calcular_Area(self):
        self.area=self.longitud * self.ancho
        return self.area
    
    def calcular_Perimetro(self):
        self.perimetro= (self.longitud + self.ancho) * 2
        return self.perimetro
obj1 = Rectangulo(5,10)
    
print("Area del rectangulo", obj1.calcular_Area())
print("Perimetro del rectangulo: ", obj1.calcular_Perimetro())