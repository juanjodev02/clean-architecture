# Principio de inversión de dependencias

Este principio nos indica que los sistemas más flexibles son aquellos en los que las dependencias delc ódigo funete se refieren sólo a abstracciones, no a concreciones.
En un lenguaje de tipos estáticos esto significa que la utilizaciónd e instrucciones user, import e include, deben referirse tan sólo a módulos fuente que contenfan interfaces, clases abstractas o algún otro tipo de declaración abstracta.

## Factorías

Para cumplir estas reglas, comúnmente se utiliza un patrón de diseño de una factoría abstracta para manejar las dependencias entre clases.
