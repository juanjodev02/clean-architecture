El ejemplo del cuadrado y el rectangulo es un ejemplo estrella de cómo no aplicar el LSP de forma correcta.

Si asumimos que un rectángulo es un tipo de cuadrado y realizamos una herencia de clases, se puede caer en un error si alguien utiliza estas clases, ya que un rectangulo modifica su ancho y su alto de forma independiente y un cuadrado no, por lo que si alguien asume un cuadrado como rectángulo, tendremos problemas con el uso de métodos que solo existen en la clase hija y no en la padre.
