# 📦 compress-image

**CLI para otimizar e converter imagens**  
Uma ferramenta simples para redimensionar e converter imagens diretamente pelo terminal.

---

## 📚 Índice

- [🚀 Como usar](#-como-usar)
- [⚙️ Opções](#️-opções)
- [📂 Exemplos de uso](#-exemplos-de-uso)
- [📝 Notas](#-notas)
- [🛠 Requisitos](#-requisitos)
- [📦 Instalação (via Bun)](#-instalação-via-bun)
- [❌ Desinstalação](#-desinstalação)
- [📄 Licença](#-desinstalação)

---

## 🚀 Como usar

```bash
compress-image <arquivo> [opções]
```

## ⚙️ Opções

| Opção                    | Descrição                                                           |
| ------------------------ | ------------------------------------------------------------------- |
| `-w, --width <largura>`  | Define a largura da imagem redimensionada (padrão: `800`)           |
| `-o, --output <caminho>` | Define o caminho de saída para salvar a imagem otimizada (opcional) |
| `-F, --format <formato>` | Define o formato de saída: `jpeg`, `png` ou `webp` (padrão: `jpeg`) |
| `-h, --help`             | Exibe a ajuda                                                       |

## 📂 Exemplos de uso

```bash
# Otimiza a imagem com largura padrão (800px) e formato JPEG
compress-image image.jpg

# Redimensiona para 500px de largura e converte para WebP
compress-image image.jpg -w 500 -F webp

# Define um caminho e nome de saída personalizados
compress-image image.jpg -o ./saida/foto_otimizada.webp -F webp
```

## 📝 Notas

- Se você não informar o --output, o nome de saída será gerado automaticamente no mesmo diretório com o sufixo \_optimized.
- Formatos suportados: jpeg, png, webp.

## 🛠 Requisitos

- [Bun](https://bun.sh/)

## 📦 Instalação (via Bun)

```bash
bun install
bun link
```

## ❌ Desinstalação

```bash
bun unlink
```

## 📄 Licença

MIT © Matheus Reis Thiesen
