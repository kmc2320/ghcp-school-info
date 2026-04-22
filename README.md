# 神山まるごと高専 紹介サイト

Astro で構築した単一ページの紹介サイトです。宇宙テーマの演出（ネビュラ背景、星パーティクル、マウス追従キラキラ、ふわふわ CTA）を実装し、GitHub Actions から GitHub Pages へ自動デプロイします。

公開 URL（Pages）:
https://kmc2320.github.io/ghcp-school-info/

## 技術スタック

- Astro + TypeScript
- Tailwind CSS
- GitHub Actions + GitHub Pages
- Node.js 22 系（devcontainer 準拠）

## ローカル開発

```bash
npm ci
npm run dev
```

開発サーバー: http://localhost:4321/ghcp-school-info/

## ビルドとプレビュー

```bash
npm run build
npm run preview
```

確認ポイント:
- コンソールエラー 0
- CSS/JS/フォント/favicon の 404 なし

## GitHub Pages 自動デプロイ

ワークフローは [.github/workflows/deploy.yml](.github/workflows/deploy.yml) を使用します。

1. GitHub リポジトリの Settings を開く
2. Pages を開く
3. Build and deployment の Source を GitHub Actions に変更する
4. `main` ブランチへ push すると自動デプロイされる

## カスタムドメイン手順

カスタムドメインを使うときは次を行います。

1. [public/CNAME](public/CNAME) を実ドメインに書き換える（1 行のみ）
2. DNS で CNAME を `kmc2320.github.io` に向ける
3. GitHub Settings > Pages でドメイン検証を完了する
4. `astro.config.mjs` の `base` を `/` に変更し、`site` をカスタムドメインに変更する

カスタムドメインを使わない場合は [public/CNAME](public/CNAME) を削除してからデプロイしてください。

## 主要ファイル

- [astro.config.mjs](astro.config.mjs): `site` / `base` / Tailwind Vite プラグイン設定
- [tailwind.config.mjs](tailwind.config.mjs): カラー・フォント・アニメーション拡張
- [src/layouts/Layout.astro](src/layouts/Layout.astro): 背景レイヤー・メタ情報
- [src/styles/global.css](src/styles/global.css): ネビュラ背景・グローバルスタイル
- [src/components/](src/components): StarField / CursorSparkle / Floating 系コンポーネント
- [src/components/sections/](src/components/sections): コンテンツセクション
- [src/pages/index.astro](src/pages/index.astro): 単一ページ組み立て

## コンテンツ方針

このサイトの文章は公開情報を要約したドラフトです。入試・制度などの最終判断は必ず公式サイトの最新情報を参照してください。