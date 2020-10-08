"""
"Print to console": {
  "prefix": "log",
  "body": [
    "console.log('$1');",
    "$2"
  ],
  "description": "Log output to console"

"""

def geraSnippet(quantidade):

  with open('snippet.txt', 'w') as file:
    for i in range(1, quantidade + 1):
      snip = '"snippet JavaScript n° '+ str(i) +'": {\n'
      snip += '\t"prefix": "",\n'
      snip += '\t"body": [\n'
      snip += '\t\t"body"\n'
      snip += '\t]\n'
      snip += '},\n'

      file.write(snip)

def geraArquivo(nome, inicio, fim, extencao):

  for i in range(inicio, fim + 1):
    aux = nome + str(i) + extencao
    coment = '// aula' + str(i) + '\n\n'
    with open(aux, 'w') as file:
      file.write(coment)

geraArquivo('aulaJS-', 1, 5, '.html')
