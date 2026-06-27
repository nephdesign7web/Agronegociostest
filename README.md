# Agronegocios CR

Código fuente completo de la web de Agronegocios CR.

Autor y creador de la web: Walter Wonder.

## Qué incluye este respaldo

- `src/`: código fuente principal de la web.
- `public/`: archivos públicos.
- `package.json`: dependencias y comandos del proyecto.
- `pnpm-lock.yaml`: lockfile para reinstalar dependencias de forma consistente.
- Archivos de configuración del proyecto: Vite, TypeScript, ESLint, Prettier y componentes.
- Assets e imágenes usados por la web.

## Qué no incluye

- `node_modules`: dependencias instaladas, se regeneran con `pnpm install`.
- `dist` o `build`: salidas de compilación, se regeneran con `pnpm build`.
- Cachés, archivos temporales o salidas locales.

## Cómo abrirlo en el futuro

1. Descomprime el ZIP.
2. Abre la carpeta en Codex, Claude, Base44, Lovable, VS Code u otro editor.
3. Instala dependencias:

```bash
pnpm install
```

4. Ejecuta la web en local:

```bash
pnpm dev
```

5. Para generar una versión de producción:

```bash
pnpm build
```

## Nota

Si no tienes `pnpm` instalado, puedes instalarlo con:

```bash
npm install -g pnpm
```
