# Matheuz1n Store (versão simples)

Site estático com produtos e links de afiliado. Sem banco, sem login.

## Arquivos
- `index.html`: a página (não precisa editar)
- `produtos.js`: lojas, IDs de afiliado e lista de produtos (você edita este)

## Como trocar seu ID de afiliado
Abra `produtos.js` e substitua `SEU_ID_...` em cada loja pelo seu código.

## Como adicionar um produto
Copie um bloco existente dentro de `PRODUTOS`, troque os campos e salve.
A `loja` precisa ser exatamente um dos nomes em `LOJAS`.

## Publicar no GitHub Pages
1. Crie um repositório e envie os arquivos (`git add . && git commit -m "site" && git push`).
2. Em Settings → Pages, escolha a branch `main` e a pasta `/ (root)`.
3. Acesse o endereço que aparecer.
