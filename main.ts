import { Command } from "commander";
import { existsSync } from "fs";
import { writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

const program = new Command();

program
  .name("compress-image")
  .description("CLI para otimizar e converter imagens com sharp")
  .arguments("[file]")
  .option(
    "-w, --width <width>",
    "Largura da imagem redimensionada (padrão: 800)",
    "800"
  )
  .option(
    "-o, --output <output>",
    "Caminho de saída da imagem otimizada (opcional)"
  )
  .option(
    "-F, --format <format>",
    "Formato de saída: jpeg, png, webp (padrão: jpeg)",
    "jpeg"
  )
  .addHelpText(
    "after",
    `
Exemplos de uso:

  $ compress-image image.jpg
  $ compress-image image.jpg -w 500 -F webp
  $ compress-image image.jpg -o ./saida/foto_otimizada.webp -F webp

Notas:
  - Se você não informar o --output, o nome de saída será gerado automaticamente.
  - Formatos suportados: jpeg, png, webp.
`
  )
  .parse(process.argv);

const filePath = program.args[0];
const options = program.opts();

if (!filePath) {
  console.error("❌ Caminho do arquivo não informado.\n");
  program.help({ error: true });
}

async function optimizeImage() {
  if (!existsSync(filePath)) {
    console.error("❌ Arquivo não encontrado:", filePath);
    process.exit(1);
  }

  const width = parseInt(options.width, 10);
  const format = options.format.toLowerCase();
  const outputPath = options.output || gerarNomeSaida(filePath, format);

  try {
    let image = sharp(filePath).rotate().resize({ width });

    switch (format) {
      case "jpeg":
      case "jpg":
        image = image.jpeg({ mozjpeg: true });
        break;
      case "png":
        image = image.png();
        break;
      case "webp":
        image = image.webp();
        break;
      default:
        console.error(`❌ Formato não suportado: ${format}`);
        process.exit(1);
    }

    const buffer = await image.toBuffer();
    await writeFile(outputPath, buffer);
    console.log(`✅ Imagem otimizada salva em: ${outputPath}`);
  } catch (error) {
    console.error("❌ Erro ao otimizar imagem:", error);
  }
}

function gerarNomeSaida(origPath: string, format: string): string {
  const ext = path.extname(origPath);
  const nome = path.basename(origPath, ext);
  const dir = path.dirname(origPath);
  return path.join(dir, `${nome}_optimized.${format}`);
}

optimizeImage();
