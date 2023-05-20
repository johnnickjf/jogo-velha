# Jogo da Velha com Algoritmo A* #

Este é um projeto de Jogo da Velha implementado em JavaScript, utilizando o algoritmo de busca A* para criar um bot inteligente que jogue contra você.

## Como Jogar: ##
Abra no seu navegador o link: https://jogo.landim.xyz/

Clique em uma célula vazia para fazer a sua jogada. 
O jogador humano é representado pelo símbolo "X".

Após a sua jogada, o bot irá realizar a sua jogada automaticamente. 
O bot é representado pelo símbolo "O".

O jogo continua alternando entre as jogadas do jogador humano e do bot até que haja um vencedor ou o tabuleiro esteja completamente preenchido.
Caso você queira reiniciar o jogo, clique no botão "Reiniciar".

Divirta-se jogando o Jogo da Velha com o bot inteligente baseado no algoritmo A*! Espero que você aproveite e tenha uma ótima experiência com o jogo!

#### Algoritmo A* ####
O algoritmo A* é uma técnica de busca que utiliza heurísticas para encontrar o melhor caminho em um grafo ponderado. Neste projeto, o algoritmo A* é utilizado pelo bot para determinar a melhor jogada a ser feita, considerando todas as possibilidades.

O bot avalia todas as jogadas possíveis em cada estado do tabuleiro e utiliza uma heurística para atribuir uma pontuação a cada jogada. A heurística leva em consideração fatores como o número de jogadas para a vitória, a posição das jogadas no tabuleiro e o possível bloqueio de vitória do jogador humano.

O algoritmo A* então busca a melhor jogada com base nas pontuações atribuídas e faz a sua jogada. Assim, o bot é capaz de tomar decisões estratégicas para tentar vencer o jogo ou evitar a derrota.

## Extra: ##
Este projeto faz uso das seguintes tecnologias e recursos:

* HTML

* CSS

* JavaScript

* Algoritmo A*


Se desejar contribuir para este projeto, fique à vontade para abrir uma "issue" relatando problemas, sugerindo melhorias ou submeter um "pull request" com suas alterações.

###### Licença ######

Este projeto está licenciado sob a licença MIT.