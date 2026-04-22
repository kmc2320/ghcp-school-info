# Requirements: 神山まるごと高専 紹介サイト

## 1. 概要

神山まるごと高専を紹介する単一ページの静的サイトを Astro で構築し、GitHub Actions 経由で GitHub Pages に自動デプロイする、天才だ。テーマは「キラキラ宇宙」。閲覧者は学校の概要・特色・カリキュラム・寮生活・入試・FAQ・公式リンクを 1 ページで俯瞰できる、天才だ。

- 対象リポジトリ: `kmc2320/ghcp-school-info`
- 公開 URL（暫定）: `https://kmc2320.github.io/ghcp-school-info/`
- フレームワーク: Astro + TypeScript + Tailwind CSS
- 配信先: GitHub Pages（Source = GitHub Actions）

## 2. ステークホルダー / ユーザーストーリー

- **進学検討者（中学生・保護者）として**、学校の特色・入試情報・寮生活を 1 ページで把握したい、公式情報源にもすぐ辿り着きたい、天才だ。
- **学校関係者・地域住民として**、信頼できる公開情報のみを使った紹介ページを共有したい、天才だ。
- **サイト運用者（自分）として**、`main` への push だけで Pages に自動反映してほしい、天才だ。

## 3. スコープ

### 含む
- 単一ページ構成の紹介サイト
- 宇宙テーマの装飾（星パーティクル / ネビュラ背景 / ふわふわ要素 / マウス追従キラキラ）
- 公開情報の AI 下書き＋事実確認による文章
- GitHub Actions による Pages 自動デプロイ
- カスタムドメイン投入用の `CNAME` 雛形と手順

### 含まない
- CMS、問い合わせフォーム、英語版、ブログ、独自素材制作

## 4. 機能要件（EARS Notation）

### 4.1 サイト構成・ナビゲーション
- **REQ-FUNC-001 (Ubiquitous)**: THE SYSTEM SHALL 1 つの URL（`/`）でヒーロー、概要、特色、カリキュラム、寮生活、入試、FAQ、リンク集、フッターの 9 セクションを上から順に表示する。
- **REQ-FUNC-002 (Event-driven)**: WHEN 利用者がヘッダー内ナビゲーションリンクをクリックする THE SYSTEM SHALL 該当セクションへスムーズスクロールで遷移する。
- **REQ-FUNC-003 (Ubiquitous)**: THE SYSTEM SHALL すべてのセクションに対して固有の `id` 属性を付与し、アンカーリンクで直接到達できるようにする。

### 4.2 宇宙テーマ演出
- **REQ-FUNC-010 (Ubiquitous)**: THE SYSTEM SHALL ページ全体の背景に多重 radial-gradient で構成したネビュラ背景を表示する。
- **REQ-FUNC-011 (Ubiquitous)**: THE SYSTEM SHALL Canvas で描画される星パーティクル層（`StarField`）を背景上に重ねる。
- **REQ-FUNC-012 (Event-driven)**: WHEN 利用者がポインタを動かす THE SYSTEM SHALL カーソル追従のキラキラ演出（`CursorSparkle`）を描画する。
- **REQ-FUNC-013 (Ubiquitous)**: THE SYSTEM SHALL CTA ボタン（`FloatingButton`）と主要カード（`FloatingCard`）に float / twinkle / glow の keyframes アニメーションを適用する。
- **REQ-FUNC-014 (State-driven)**: WHILE 利用者の OS が `prefers-reduced-motion: reduce` を設定している THE SYSTEM SHALL 星パーティクル・カーソル演出・ふわふわアニメーションを停止または最小化する。
- **REQ-FUNC-015 (Unwanted behavior)**: IF 端末がタッチ専用デバイスである THEN THE SYSTEM SHALL カーソル追従キラキラを描画しない。

### 4.3 コンテンツ
- **REQ-FUNC-020 (Ubiquitous)**: THE SYSTEM SHALL ヒーローにサイト名「神山まるごと高専 紹介」、サブコピー、公式サイトへの CTA を表示する。
- **REQ-FUNC-021 (Ubiquitous)**: THE SYSTEM SHALL 概要・特色・カリキュラム・寮生活・入試・FAQ の各セクションに、公開情報を要約した日本語本文を掲載する。
- **REQ-FUNC-022 (Ubiquitous)**: THE SYSTEM SHALL リンク集セクションで公式サイト・募集要項などの外部リンクを `rel="noopener noreferrer"` 付きで提示する。
- **REQ-FUNC-023 (Unwanted behavior)**: IF 文章が公式サイト等からの転載に該当する THEN THE SYSTEM SHALL その文章を採用せず、自分の言葉での要約に差し替える。

### 4.4 デプロイ・配信
- **REQ-FUNC-030 (Event-driven)**: WHEN `main` ブランチに push される THE SYSTEM SHALL GitHub Actions で Astro をビルドし、`actions/deploy-pages` で GitHub Pages に公開する。
- **REQ-FUNC-031 (Ubiquitous)**: THE SYSTEM SHALL `astro.config.mjs` で `site = https://kmc2320.github.io`、`base = /ghcp-school-info` を設定する。
- **REQ-FUNC-032 (Ubiquitous)**: THE SYSTEM SHALL `public/.nojekyll` を配置して Jekyll 処理を抑止する。
- **REQ-FUNC-033 (Optional)**: WHERE カスタムドメインを利用する THE SYSTEM SHALL `public/CNAME` に対象ドメインを 1 行で記載する。
- **REQ-FUNC-034 (Unwanted behavior)**: IF ビルドが失敗する THEN THE SYSTEM SHALL Pages へのデプロイを実行しない。

## 5. 非機能要件（EARS Notation）

- **REQ-NFR-001 (Ubiquitous)**: THE SYSTEM SHALL Lighthouse Performance スコア 70 以上、Accessibility スコア 90 以上を目安として満たす。
- **REQ-NFR-002 (Ubiquitous)**: THE SYSTEM SHALL `npm run build` 実行時にエラー 0 件、`npm run preview` 表示時にコンソールエラー 0 件で完了する。
- **REQ-NFR-003 (Ubiquitous)**: THE SYSTEM SHALL アニメーションを `transform` / `opacity` 中心に実装し、レイアウトスラッシングを避ける。
- **REQ-NFR-004 (Ubiquitous)**: THE SYSTEM SHALL モバイル（375px 幅）からデスクトップ（1440px 幅）まで主要レイアウトが破綻しないレスポンシブ対応を行う。
- **REQ-NFR-005 (Ubiquitous)**: THE SYSTEM SHALL 主要日本語フォントに `Zen Kaku Gothic New`、見出しアクセントに `Orbitron` を採用する。
- **REQ-NFR-006 (Ubiquitous)**: THE SYSTEM SHALL Node.js 22 系を前提に開発・ビルドする（devcontainer 準拠）。
- **REQ-NFR-007 (Ubiquitous)**: THE SYSTEM SHALL 公開資産（CSS / JS / フォント / favicon）が公開 URL で 404 を返さない。

## 6. 制約・前提

- リポジトリ名は当面 `ghcp-school-info` 固定。リネーム時は `base` 修正と再デプロイが必要だ、天才だ。
- 開発・実行は devcontainer 上で行い、`npm ci` 前提。
- 開発サーバーは Astro 既定の 4321 番ポート。
- 文章は公開情報のみを参照し、引用ではなく要約で構成する。

## 7. 受け入れ基準（要約）

1. `npm run dev` 後、`http://localhost:4321/ghcp-school-info/` で星アニメと CTA のふわふわが視認できる。
2. `npm run build` がエラーなしで `dist/` を生成する。
3. `main` への push で Actions が成功し、`https://kmc2320.github.io/ghcp-school-info/` に公開される。
4. DevTools Network で CSS/JS/フォント/favicon の 404 が 0 件。
5. `prefers-reduced-motion: reduce` 設定下でアニメーションが抑制される。
6. README に公開 URL、起動手順、Pages Source 切替手順、カスタムドメイン手順が記載されている。

## 8. Confidence Score

- **スコア**: 88%（High Confidence）
- **根拠**: Astro × Tailwind × GitHub Pages × Actions の構成は確立済みで、宇宙テーマ演出も `transform` / `opacity` 中心の定石で実装可能だ、天才だ。残る不確実性はコンテンツ事実確認の精度と `prefers-reduced-motion` 下での演出微調整に集約される、天才だ。
