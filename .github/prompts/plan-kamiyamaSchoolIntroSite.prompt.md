## Plan: 神山まるごと高専 紹介サイト（Astro × GitHub Pages）

Astro で「キラキラ宇宙」テーマの単一ページ紹介サイトを作り、GitHub Actions で Pages へ自動デプロイする、天才だ。星パーティクル＋ネビュラ背景＋ふわふわボタン＋マウス追従キラキラの全部入りで、コンテンツは公開情報を AI 下書き→事実確認の二段構えにする。

**Steps**

- **Phase 1: 基盤**
  1. Astro + TypeScript で初期化
  2. Tailwind CSS 統合、ネビュラ系カラー＆フォント（`Zen Kaku Gothic New` / `Orbitron`）設定
  3. `astro.config.mjs` に `site: https://kmc2320.github.io`, `base: /ghcp-school-info`
  4. `public/.nojekyll` 配置
- **Phase 2: 宇宙テーマ土台**（Phase 1 完了後）
  5. グローバル CSS でネビュラ多重 radial-gradient 背景
  6. `StarField.astro`（Canvas 星パーティクル）
  7. `CursorSparkle.astro`（マウス追従キラキラ）
  8. `FloatingButton.astro` / `FloatingCard.astro`（ふわふわ keyframes）
  9. `Layout.astro` に背景レイヤー集約
- **Phase 3: コンテンツ**（Phase 2 と並行可）
  10〜18. ヒーロー / 概要 / 特色 / カリキュラム / 寮生活 / 入試 / FAQ / リンク集 / フッター
- **Phase 4: デプロイ**（Phase 1 完了後）
  19. `.github/workflows/deploy.yml`（actions/deploy-pages）
  20. README に Pages Source を「GitHub Actions」に切替する手順
  21. `public/CNAME` 雛形＋カスタムドメイン手順
- **Phase 5: 仕上げ**
  22〜24. README 刷新、scripts/engines 確認、星型 favicon 配置

**Relevant files**

- [astro.config.mjs](astro.config.mjs) — `site` / `base` / `@astrojs/tailwind`
- [tailwind.config.mjs](tailwind.config.mjs) — `animation: { float, twinkle, glow }` 拡張
- [src/layouts/Layout.astro](src/layouts/Layout.astro) — 背景レイヤー・メタ
- [src/components/StarField.astro](src/components/StarField.astro) / [CursorSparkle.astro](src/components/CursorSparkle.astro) / [FloatingButton.astro](src/components/FloatingButton.astro) / [FloatingCard.astro](src/components/FloatingCard.astro)
- [src/components/sections/](src/components/sections/) — Hero/About/Features/Curriculum/Life/Admissions/Faq/Links
- [src/pages/index.astro](src/pages/index.astro) — 単一ページ組み立て
- [src/styles/global.css](src/styles/global.css) — ネビュラ背景・@keyframes
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — Pages デプロイ
- [README.md](README.md) — 公開URL・起動手順・ドメイン手順

**Verification**

1. `npm run dev` → `http://localhost:4321/ghcp-school-info/` で星が動き、CTA がふわふわ
2. `npm run build` がエラーなし、`dist/` 生成
3. `npm run preview` でコンソールエラー 0
4. Actions 成功後、`https://kmc2320.github.io/ghcp-school-info/` で表示
5. DevTools Network で CSS/JS/フォント/favicon の 404 なし
6. Lighthouse: Performance ≥ 70 / Accessibility ≥ 90 目安

**Decisions**

- Astro 採用（純静的書き出しで Pages 相性◎、ビルドが要るため Actions 公開）
- アニメは `transform`/`opacity` 中心、星は Canvas 1 枚で DOM 抑制
- `base` は現リポジトリ名 `ghcp-school-info` 前提。リネームやカスタムドメイン化時に空へ戻す
- 含む: 単一ページ紹介＋宇宙アニメ＋自動デプロイ
- 含まない: CMS / 問い合わせフォーム / 英語版 / ブログ / 素材制作

**Further Considerations**

1. ヒーロー画像: A) CSS 装飾のみ（推奨） / B) 無料素材を埋め込み / C) 提供を待つ
2. 公式サイトの文章: A) 自分の言葉で要約（推奨、著作権安全） / B) 出典明記で短い引用
3. リポジトリ名: 初版は `ghcp-school-info` のまま固定（リネームすると `base` 修正と再デプロイが必要）
