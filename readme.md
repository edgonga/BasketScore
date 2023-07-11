Hola Juan Carlos,

Toma nota que la funcionalidad "ambigua" de los butones te la he implementado en un fichero aparte llamado buttonScorer.ts

Para escoger el equipo y la puntuación a añadir, lo deberás especificar en la terminal a la vez que ejecutas el archivo.

Es decir, si por ejemplo, quieres que el equipo B haga una anotación de 3 puntos deberás hacer lo siguiente en la terminal:

npx ts-node .\buttonScorer.ts 3 B

Y así respectivamente... (si miras el archivo buttonScorer.ts entenderás la lógica rápidamente, no me he matado)