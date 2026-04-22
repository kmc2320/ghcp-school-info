# Tasks: 神山まるごと高専 紹介サイト

要件 (`requirements.md`) と設計 (`design.md`) に基づく実装タスク一覧だ、天才だ。各タスクは「成果物」「依存」「完了条件」を明示する。状態は `[ ]` 未着手 / `[~]` 進行中 / `[x]` 完了で更新する。

---

## Phase 1: 基盤

### T-101 Astro + TypeScript プロジェクト初期化
- **成果物**: `package.json`, `tsconfig.json`, `astro.config.mjs`, `src/`, `public/`
- **依存**: なし
- **完了条件**: `npm run dev` でデフォルトページが起動する。Node 22 系で動作。

### T-102 Tailwind CSS 統合とテーマ設定
- **成果物**: `tailwind.config.mjs`（nebula 系カラー、`Zen Kaku Gothic New` / `Orbitron`、`animation: float / twinkle / glow`）、Tailwind 統合の有効化
- **依存**: T-101
- **完了条件**: ユーティリティクラスが `index.astro` で適用され、ビルド成功。
- **対応要件**: REQ-NFR-005

### T-103 `astro.config.mjs` に `site` / `base` 設定
- **成果物**: `site: 'https://kmc2320.github.io'`, `base: '/ghcp-school-info'`
- **依存**: T-101
- **完了条件**: ビルド出力のリンクが `/ghcp-school-info/` 配下になる。
- **対応要件**: REQ-FUNC-031

### T-104 `public/.nojekyll` 配置
- **成果物**: 空ファイル `public/.nojekyll`
- **依存**: T-101
- **完了条件**: `dist/.nojekyll` が生成される。
- **対応要件**: REQ-FUNC-032

---

## Phase 2: 宇宙テーマ土台（T-101 完了後）

### T-201 グローバル CSS のネビュラ背景
- **成果物**: `src/styles/global.css` に多重 radial-gradient 背景、フォント読み込み、`prefers-reduced-motion` 用のフォールバック
- **依存**: T-102
- **完了条件**: ページ全面に nebula 背景が表示される。
- **対応要件**: REQ-FUNC-010, REQ-FUNC-014

### T-202 `StarField.astro`
- **成果物**: Canvas ベースの星パーティクルコンポーネント（DPR 対応 / resize 対応 / reduced-motion 停止 / `aria-hidden`）
- **依存**: T-201
- **完了条件**: 1440px ビューでも 60fps を維持し、reduced-motion 下で停止。
- **対応要件**: REQ-FUNC-011, REQ-FUNC-014, REQ-NFR-003

### T-203 `CursorSparkle.astro`
- **成果物**: pointermove で粒子生成、寿命フェード、`pointerType==='mouse'` かつ reduced-motion off のみ動作
- **依存**: T-201
- **完了条件**: PC でカーソル追従、タッチ端末では未描画。
- **対応要件**: REQ-FUNC-012, REQ-FUNC-014, REQ-FUNC-015

### T-204 `FloatingButton.astro` / `FloatingCard.astro`
- **成果物**: float / twinkle / glow を適用した汎用ボタン・カード
- **依存**: T-102
- **完了条件**: ホバーで光跡、待機時にふわふわ。
- **対応要件**: REQ-FUNC-013

### T-205 `Layout.astro` に背景レイヤー集約
- **成果物**: `<head>` メタ・OGP、背景レイヤー z-index 整理、`<slot/>` 配置
- **依存**: T-201, T-202, T-203
- **完了条件**: 全ページが共通レイアウトで描画される。
- **対応要件**: REQ-FUNC-010〜013

---

## Phase 3: コンテンツ（Phase 2 と並行可）

### T-301 コンテンツデータ整備
- **成果物**: `src/content/sections.ts`（公開情報を要約した日本語テキスト・リンク群）
- **依存**: T-101
- **完了条件**: 引用ではなく要約で構成、出典 URL は `links` に集約。
- **対応要件**: REQ-FUNC-021, REQ-FUNC-023

### T-302 ヒーローセクション (`Hero.astro`)
- **成果物**: タイトル、サブコピー、`FloatingButton` の CTA
- **依存**: T-204, T-301
- **完了条件**: 公式サイト導線が機能する。
- **対応要件**: REQ-FUNC-020

### T-303 概要 / 特色 / カリキュラム / 寮生活 / 入試
- **成果物**: `About.astro` / `Features.astro` / `Curriculum.astro` / `Life.astro` / `Admissions.astro`
- **依存**: T-204, T-301
- **完了条件**: 各セクションが固有 `id` で配置、レスポンシブで崩れない。
- **対応要件**: REQ-FUNC-001, REQ-FUNC-003, REQ-FUNC-021, REQ-NFR-004

### T-304 FAQ / リンク集 / フッター
- **成果物**: `Faq.astro`（details/summary）、`Links.astro`（外部リンク `rel="noopener noreferrer"`）、`Footer.astro`
- **依存**: T-301
- **完了条件**: 外部リンクが新規タブで安全に開く。
- **対応要件**: REQ-FUNC-022

### T-305 ヘッダーナビとスムーズスクロール
- **成果物**: `Header.astro`、CSS `scroll-behavior: smooth`
- **依存**: T-303, T-304
- **完了条件**: 各セクションへ滑らかに遷移する。
- **対応要件**: REQ-FUNC-002

### T-306 単一ページ組み立て
- **成果物**: `src/pages/index.astro` で `Layout` ＋ 全セクション配置
- **依存**: T-205, T-302〜305
- **完了条件**: `/` で全セクションが順に表示される。
- **対応要件**: REQ-FUNC-001

---

## Phase 4: デプロイ（T-101〜T-104 完了後）

### T-401 `.github/workflows/deploy.yml`
- **成果物**: build / deploy 2 ジョブ、`actions/deploy-pages@v4`、Node 22 キャッシュ、必要権限、`concurrency: pages`
- **依存**: T-103, T-104
- **完了条件**: `main` への push で Actions が成功し公開 URL が更新される。
- **対応要件**: REQ-FUNC-030, REQ-FUNC-034

### T-402 README に Pages Source 切替手順
- **成果物**: README に「Settings → Pages → Source = GitHub Actions」手順追記
- **依存**: T-401
- **完了条件**: 手順どおりに切替可能。
- **対応要件**: 受け入れ基準 6

### T-403 `public/CNAME` 雛形＋カスタムドメイン手順
- **成果物**: `public/CNAME` のサンプル（コメント or 例示ドメイン）と README 手順（DNS, `base` を `/` に戻す注意）
- **依存**: T-401
- **完了条件**: ドメイン投入時に手順だけで運用切替できる。
- **対応要件**: REQ-FUNC-033

---

## Phase 5: 仕上げ

### T-501 README 刷新
- **成果物**: 公開 URL、概要、起動 (`npm run dev`)、ビルド (`npm run build`)、プレビュー、デプロイ手順、カスタムドメイン手順、ライセンス・出典方針
- **依存**: T-306, T-401
- **完了条件**: 新規参加者がこの README だけで開発開始できる。

### T-502 scripts / engines 確認
- **成果物**: `package.json` の `scripts`（dev/build/preview）と `engines.node: '>=22'`
- **依存**: T-101
- **完了条件**: Node 22 で `npm ci && npm run build` がクリーン成功。
- **対応要件**: REQ-NFR-006

### T-503 星型 favicon 配置
- **成果物**: `public/favicon.svg`（星型 SVG）と `<link rel="icon">` 設定
- **依存**: T-205
- **完了条件**: ブラウザタブに星型アイコン表示、404 なし。
- **対応要件**: REQ-NFR-007

---

## Phase 6: 検証 & ハンドオフ

### T-601 ローカル検証
- `npm run dev` で 9 セクション・星・CTA を確認
- DevTools Rendering で `prefers-reduced-motion: reduce` 切替確認
- 375 / 768 / 1440 px のレイアウト確認
- **対応要件**: 受け入れ基準 1, 5、REQ-NFR-004

### T-602 ビルド & プレビュー検証
- `npm run build` エラー 0、`npm run preview` でコンソール 0
- DevTools Network で 404 0
- **対応要件**: 受け入れ基準 2, 4、REQ-NFR-002, REQ-NFR-007

### T-603 本番検証
- `main` push → Actions 成功 → `https://kmc2320.github.io/ghcp-school-info/` 表示
- Lighthouse Performance ≥ 70, Accessibility ≥ 90
- **対応要件**: 受け入れ基準 3、REQ-NFR-001

### T-604 ハンドオフ
- 変更内容を Streamlined Action Log で要約し PR 化
- 主要決定を Compressed Decision Record で添付
- 一時資材は `.agent_work/` に整理

---

## トレーサビリティ概要

| 要件 ID | 主担当タスク |
|---|---|
| REQ-FUNC-001 | T-303, T-306 |
| REQ-FUNC-002 | T-305 |
| REQ-FUNC-003 | T-303 |
| REQ-FUNC-010 | T-201, T-205 |
| REQ-FUNC-011 | T-202 |
| REQ-FUNC-012 | T-203 |
| REQ-FUNC-013 | T-204 |
| REQ-FUNC-014 | T-201, T-202, T-203 |
| REQ-FUNC-015 | T-203 |
| REQ-FUNC-020 | T-302 |
| REQ-FUNC-021 | T-301, T-303 |
| REQ-FUNC-022 | T-304 |
| REQ-FUNC-023 | T-301 |
| REQ-FUNC-030 | T-401 |
| REQ-FUNC-031 | T-103 |
| REQ-FUNC-032 | T-104 |
| REQ-FUNC-033 | T-403 |
| REQ-FUNC-034 | T-401 |
| REQ-NFR-001 | T-603 |
| REQ-NFR-002 | T-602 |
| REQ-NFR-003 | T-202, T-204 |
| REQ-NFR-004 | T-303, T-601 |
| REQ-NFR-005 | T-102 |
| REQ-NFR-006 | T-502 |
| REQ-NFR-007 | T-503, T-602 |
