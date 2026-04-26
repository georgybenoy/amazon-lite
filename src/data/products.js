/**
 * Product Dataset — Calm Commerce
 * 
 * Each product is a plain object. Badge types correspond to CSS
 * classes in globals.css: bestseller | limited | toprated | hot | trending
 */

export const products = [
  {
    id: 'prod-001',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 59.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBJTmwl7JyD9TMvv68k3WvoYWeUBO9PmkdrP9JcbW9MZGpVOdFqZA_ArdgANjBw1riuJjwPZ_CugdUkjj1pCsRp63cQ2iXa3GxRVmTpNvV7CV92szJVAW5Ctz-_qbb3XxJz4zVtnomqpTDlF-5SNSD62xEpx0gtQPZBfcmOSTZJFy-dk9DL8owPS4M-wqh3Ae3PZdRxMTtrnPrWB-4DEOM7qLhMAYPLRjRoeyyoFw5QVnTO-dfSg6_MryubwDbUAPD7zNuh79DWJUs',
    badge: 'Best Seller',
    badgeType: 'bestseller'
  },
  {
    id: 'prod-002',
    name: 'Analog Watch',
    category: 'Fashion',
    price: 19.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl10reLaHg-T5d64P62-w5q9CR1GlEBPJ0ir2DyIX9tV1TmqOtEq0sMcVOioDR4GQqK0-MSfWXoKiv0mYtaKREwgsd61Q-g2OKyf41zVVwnCkJQnxo6-6fGqcExWgP0pAFD8uF32UOvkB26iy2Ymlksaj28uJbAYkrgv6-mCHQJEJnPm6dGiQzwCfBBGSaANsYrcDOvJvmqdzzO-3Sfq-4pUDIhEueVLcAYhQJcfMxYWuLhax7N_H1j6AcPS68UPtHzZJgw4YOJBig',
    badge: 'Limited Deal',
    badgeType: 'limited'
  },
  {
    id: 'prod-003',
    name: '43" 4K Smart TV',
    category: 'Electronics',
    price: 289.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFw1otYKEubGHaUORA59_juJUBC_wWoJ59Rcw_PtbqJsH-IrxxwbUrDm-hQwoWFh-n4aSeRQRt6jrJ9gZdYsRzDqq5GBHTYRS6IfzI9mEfijt8pJ53QxR4XU0b_fCrAE00_5lBAN9b_uC8f97snU4htX2F-nA4WPCoJeZoOeBBY6MUF39Ya7tb3GelFn38umu_h52tSFs77hx4bEddls5k4OuEjs0CqYw1cYFQn-xJDah6whrtOCtLup7gwJgG0RvBQfvqQDDwnc-y',
    badge: null,
    badgeType: null
  },
  {
    id: 'prod-004',
    name: 'Office Chair',
    category: 'Home',
    price: 74.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5e4bZJeNyqx3QgXbR4R4x-mFnKYubxCVYsqMLhrOmkoQLselRp7wGr03nRGRAAmcYhrrjzS4mjdeRoc_sArMkJc3pCNrujI6IGiY6OsJqumu02411bUgtNsAKjGK3h2YQ1qEuQu_Q4ln1RCzwcOTF1d5abvBCD7OFgliVq4Y4JBTSHySvZlYJWaLhylltVCsay8ktWGrIOd3ywp0wNqqcTEMf7LpSZBnR_HIDNay1C1BVpzbtuPNNTU4rp4gycCSVkhyTju5rKCND',
    badge: 'Top Rated',
    badgeType: 'toprated'
  },
  {
    id: 'prod-005',
    name: 'Running Shoes',
    category: 'Fashion',
    price: 24.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8sHLFETud6E-SkBs7WCKG4yyGxrSyUBCYpZQnP7m1WhpmUeF9uW49Kzezp4ejDP_19LuNpbdjyel0tUmxMfsqpFD29jiR1tfdJBACZZpZ9yZpeDwMnmNOO0w--55D-OybL411MtfZ_KKC6To3qzQFOn_JF-hvTyMTWvzL_5IlWuWckoRL2c2sKR2Tsv70KiQBibKWIntI0amBi2dizt9-I_AGg6VOWvgMBJqQ3_fDB6KQuJywiKafPjEQ6rOyI1U63V46iyys7YKM',
    badge: null,
    badgeType: null
  },
  {
    id: 'prod-006',
    name: 'Portable Speaker',
    category: 'Electronics',
    price: 14.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAINEit1aQcTbQZL1FCFkm08V2OdU-vGYzzvkynU36iv2A1xwEiB8adO83h2_lSK-doqVtNMkg5jpSqfTzlVHw3A56KeRG5MUope99uF4lfOuKbKKxD9CFD72YoOH63YKYG1m78lq4Xf61ifkRIZSfZUt3jP_6IigxQpA6ONKbmeu_03bFSmSQ8Tmjak0Q6zad78kHCQw6O0B5p713uS15P2c3fESCfh4m8sj29D_6IZrRzAraCCsdumFqUyy4veAFDJWzbAGrr0EvM',
    badge: 'Hot Deal',
    badgeType: 'hot'
  },
  {
    id: 'prod-007',
    name: 'Cotton Bedsheet',
    category: 'Home',
    price: 12.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcetgFGCtd1kE0uXFTRrg1NS0DbNo38ZiiI2F5FmDGBTqJM1UxTPgrB-j33UfevGqozxluTWmO-ek1_cRuqYCwpdbtOYaeDxm-IYxhfL-RQntGi3J_TsleUxIEhZLprMKT4N3i-Q7RcnC5paUrAyHr37_delQsuOO2nNlhOowEYuqDam5NlUAOs2yDitH_OaF6WUy2-JXBD5E9jg14aBfW2Z37Y5TzNfyL7adqwq0Rt0HxA7nRZRmOQAEdeJHOn7aVFpB9mz_PQ0yr',
    badge: null,
    badgeType: null
  },
  {
    id: 'prod-008',
    name: 'Gaming Keyboard',
    category: 'Electronics',
    price: 34.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1r1CColrw5k1k10qcVZhtbK0P-11hYTI_ZaBpzITCNUN_48AtowoFfaOEXJlqtHKepN3waJJScMX6hP6_fGRCS6RZ2Qs5faS8tAzZv4aBvN06Hlj2-jrqTj8I5P6I6fW9GvCGYfC3XbQhkewiCw5BiqQ_YBIkjZqTB3LRmorcam072Q5cvDCepfz6fyd2mDCilAeJCElevk0hSFkBuEFEMxh1mimw-2k8lSL9GSz6vE5ojarnv8DAmBQepA2abyRZOS2YFjMUiMCs',
    badge: 'Best Seller',
    badgeType: 'bestseller'
  },
  {
    id: 'prod-009',
    name: 'Air Fryer 4L',
    category: 'Home',
    price: 49.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7fskTMw92cAMmo4b_XYeuoUhqqOo7fjuci_TPyT8tIjIQD1oKTEBbLP5AcPXtubdnTAeX5pVB2h6-6NcPPSyUq6Ev3NNkdKeGa0Me9gcPjggoXCANOCKyWeOVqeYlOtrLpMsispn8U14g69hk4RiGytw8rpmVtlKalmVZX8k-9PA5eK7JMPw9VbDruzmw012QkFAamxW3-SoiBwRr1gWqxOG_oo9W-PKcilpzgzuM_Dkf23gcHQWXARbhPcXSb1-AMbUhqUatahJq',
    badge: 'Trending',
    badgeType: 'trending'
  },
  {
    id: 'prod-010',
    name: 'Classic Sunglasses',
    category: 'Fashion',
    price: 8.99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQzmV72eJ2ZMr6GX9rWrmw7dWBLzDFdYflc6GS8qd_ppAgEKfRhQUVQLIuxMYvrwzApIvMCUexGHl4GoXTDDalmAtTaYpCbshfZUC8WSobnCH5E8IHubsW91xMKKK2aC9NU81siFJZmnCnm2no2HWN-ogvvH1Yeg-r7kglPSx9ccM0XZdGAzk6ttRH1jpiDazzMS5-Cuz63lw2_mh964hbnVhswd01yZ0DJfXmnVC-KEBj7tsEkn8ha9wTqUZikola8gYpunh84QHx',
    badge: null,
    badgeType: null
  }
];
