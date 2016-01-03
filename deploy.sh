#!/bin/bash

# Caminho onde os fontes devem estar
caminho_fontes=./WebContent/.

# Caminho do diretorio para deploy
caminho_deploy=/var/www/html/pistas/

# Resumo do que vai acontecer
echo "Iniciando o deploy das telas para o apache."
echo "Caminho atual dos arquivos: $caminho_fontes"
echo "Caminho para o deploy: $caminho_deploy"

echo "Comando a ser executado: cp -R $caminho_fontes $caminho_deploy"
cp -R $caminho_fontes $caminho_deploy

echo "Arquivos copiados!"
