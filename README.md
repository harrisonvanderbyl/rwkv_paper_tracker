# RWKV Paper Tracker

A curated, categorized list of **237 research papers** built around the
[RWKV](https://github.com/BlinkDL/RWKV-LM) (Receptance Weighted Key Value) linear-attention architecture,
spanning 2023–2026. Papers are included when RWKV is the central architecture or object of study,
not when it only appears as a baseline.

The interactive site (category browser, paper details and publication timeline) is a React + TypeScript app
built by GitHub Actions and served on GitHub Pages.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run readme   # regenerate this README from src/data/papers.json
```

Paper data lives in [`src/data/papers.json`](src/data/papers.json); categories in
[`src/data/categories.json`](src/data/categories.json).

## Categories

| Category | Papers |
| --- | ---: |
| [Core Architecture & Language Models](#core-architecture--language-models) | 16 |
| [Surveys & Analysis](#surveys--analysis) | 4 |
| [State, Memory & Long Context](#state-memory--long-context) | 6 |
| [Hardware & Efficiency](#hardware--efficiency) | 5 |
| [NLP & Language Applications](#nlp--language-applications) | 11 |
| [Multimodal & Vision-Language](#multimodal--vision-language) | 13 |
| [Computer Vision](#computer-vision) | 14 |
| [Image Restoration, Enhancement & Fusion](#image-restoration-enhancement--fusion) | 29 |
| [Medical & Biomedical](#medical--biomedical) | 46 |
| [Remote Sensing & Earth Observation](#remote-sensing--earth-observation) | 25 |
| [3D & Point Clouds](#3d--point-clouds) | 9 |
| [Video & Action](#video--action) | 6 |
| [Speech, Audio & Music](#speech-audio--music) | 11 |
| [Time Series & Forecasting](#time-series--forecasting) | 15 |
| [Reinforcement Learning & Robotics](#reinforcement-learning--robotics) | 7 |
| [Science, Engineering & Other Domains](#science-engineering--other-domains) | 15 |
| [Spiking & Quantum RWKV](#spiking--quantum-rwkv) | 5 |

## Core Architecture & Language Models

The official RWKV-4/5/6/7 papers, architectural variants, hybrids with attention, distillation into RWKV, and large-scale language model training.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-05 | [Triplet-Block Diffusion RWKV](https://arxiv.org/abs/2605.25969) [[pdf]](https://arxiv.org/pdf/2605.25969) | Ke Lin, Yiyang Luo, Zhaolong Su et al. | Conference on Empirical Methods in Natural Language Processing |
| 2026 | [Halved CLM Exposure Mitigates Late-Training Degradation in Small Recurrent Language Models](https://doi.org/10.18653/2026.babylm-main.1) | Y. Maheshwari | Proceedings of the Second BabyLM Workshop |
| 2025-11 | [Bi-directionalization of Auto-regressive RWKV Model](https://doi.org/10.5626/jok.2025.52.11.961) | Kyoseong Koo, H. Shin, J. Lee | Journal of KIISE |
| 2025-11 | [H-RWKV: Hybrid model architecture for RWKV](https://doi.org/10.1145/3786709.3786721) | Xin Yuan, Hui-Zhao Li, Jun Yang et al. | Proceedings of the 2025 International Conference on Artificial Intelligence and Foundation Model |
| 2025-05 | [BioRWKV: RWKV Large Model Inspired by Biological Brain Inspired](https://doi.org/10.1109/ICICR65456.2025.00153) | Xin Liu, Yiwen Zhang, Lei Liu | 2025 2nd International Conference on Intelligent Computing and Robotics (ICICR) |
| 2025-05 | [RADLADS: Rapid Attention Distillation to Linear Attention Decoders at Scale](https://arxiv.org/abs/2505.03005) [[pdf]](https://arxiv.org/pdf/2505.03005) | Daniel Goldstein, Eric Alcaide, Janna Lu et al. | arXiv preprint |
| 2025-04 | [RWKV-X: A Linear Complexity Hybrid Language Model](https://arxiv.org/abs/2504.21463) [[pdf]](https://arxiv.org/pdf/2504.21463) | Haowen Hou, Zhiyi Huang, Kaifeng Tan et al. | arXiv preprint |
| 2025-04 | [WuNeng: Hybrid State with Attention](https://arxiv.org/abs/2504.19191) [[pdf]](https://arxiv.org/pdf/2504.19191) | Liu Xiao, Li Zhiyuan, Lin Yueyu | arXiv preprint |
| 2025-04 | [Millions of States: Designing a Scalable MoE Architecture with RWKV-7 Meta-learner](https://arxiv.org/abs/2504.08247) [[pdf]](https://arxiv.org/pdf/2504.08247) | Liu Xiao, Li Zhiyuan, Lin Yueyu | arXiv preprint |
| 2025-03 | [RWKV-7 "Goose" with Expressive Dynamic State Evolution](https://arxiv.org/abs/2503.14456) [[pdf]](https://arxiv.org/pdf/2503.14456) | Bo Peng, Ruichong Zhang, Daniel Goldstein et al. | arXiv preprint |
| 2025-01 | [ARWKV: Pretrain is not what we need, an RNN-Attention-Based Language Model Born from Transformer](https://arxiv.org/abs/2501.15570) [[pdf]](https://arxiv.org/pdf/2501.15570) | Lin Yueyu, Li Zhiyuan, Peter Yue et al. | arXiv preprint |
| 2024-07 | [GoldFinch: High Performance RWKV/Transformer Hybrid with Linear Pre-Fill and Extreme KV-Cache Compression](https://arxiv.org/abs/2407.12077) [[pdf]](https://arxiv.org/pdf/2407.12077) | Daniel Goldstein, Fares Obeid, Eric Alcaide et al. | arXiv preprint |
| 2024-04 | [Eagle and Finch: RWKV with Matrix-Valued States and Dynamic Recurrence](https://arxiv.org/abs/2404.05892) [[pdf]](https://arxiv.org/pdf/2404.05892) | Bo Peng, Daniel Goldstein, Quentin Anthony et al. | arXiv preprint |
| 2024-02 | [Enhancing Transformer RNNs with Multiple Temporal Perspectives](https://arxiv.org/abs/2402.02625) [[pdf]](https://arxiv.org/pdf/2402.02625) | Razvan-Gabriel Dumitru, Darius Peteleaza, Mihai Surdeanu | arXiv preprint |
| 2023-06 | [RRWKV: Capturing Long-range Dependencies in RWKV](https://arxiv.org/abs/2306.05176) [[pdf]](https://arxiv.org/pdf/2306.05176) | Leilei Wang | arXiv preprint |
| 2023-05 | [RWKV: Reinventing RNNs for the Transformer Era](https://arxiv.org/abs/2305.13048) [[pdf]](https://arxiv.org/pdf/2305.13048) | Bo Peng, Eric Alcaide, Quentin Anthony et al. | Conference on Empirical Methods in Natural Language Processing |

## Surveys & Analysis

Surveys of the RWKV ecosystem and empirical analyses of what RWKV models learn.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-09 | [NinaXander: Feasibility and Limits of Composing Frozen Language Models Across Architecture Families via a Shared Latent Space](https://arxiv.org/abs/2609.38261) [[pdf]](https://arxiv.org/pdf/2609.38261) | Takanori Kotama, Shun-ichiro Hayashi, Daichi Mukunoki et al. | arXiv preprint |
| 2025-02 | [Exploring RWKV for Sentence Embeddings: Layer-wise Analysis and Baseline Comparison for Semantic Similarity](https://arxiv.org/abs/2502.14620) [[pdf]](https://arxiv.org/pdf/2502.14620) | Xinghan Pan | arXiv preprint |
| 2024-12 | [A Survey of RWKV](https://arxiv.org/abs/2412.14847) [[pdf]](https://arxiv.org/pdf/2412.14847) | Zhiyuan Li, Tingyu Xia, Yi Chang et al. | Neurocomputing |
| 2024-11 | [The Evolution of RWKV: Advancements in Efficient Language Modeling](https://arxiv.org/abs/2411.02795) [[pdf]](https://arxiv.org/pdf/2411.02795) | Akul Datta | arXiv preprint |

## State, Memory & Long Context

Exploiting the recurrent WKV state: state tuning, reusable states for retrieval, state stability over extreme context, and long-sequence generation.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-08 | [SANE: State Anomaly Neutralization for Stable Extreme-Context Delta-Rule Models](https://arxiv.org/abs/2608.22354) [[pdf]](https://arxiv.org/pdf/2608.22354) | Qingwen Lin, Boyan Xu, Xiao Liu et al. | arXiv preprint |
| 2026-01 | [DREAMSTATE: Diffusing States and Parameters for Recurrent Large Language Models](https://arxiv.org/abs/2601.19221) [[pdf]](https://arxiv.org/pdf/2601.19221) | Liu Xiao | arXiv preprint |
| 2026-01 | [ROSA-Tuning: Enhancing Long-Context Modeling via Suffix Matching](https://arxiv.org/abs/2602.02499) [[pdf]](https://arxiv.org/pdf/2602.02499) | Yunao Zheng, Xiaojie Wang, Lei Ren et al. | arXiv preprint |
| 2026-01 | [EmbeddingRWKV: State-Centric Retrieval with Reusable States](https://arxiv.org/abs/2601.07861) [[pdf]](https://arxiv.org/pdf/2601.07861) | Haowen Hou, Jie Yang | arXiv preprint |
| 2025-04 | [State Tuning: State-based Test-Time Scaling on RWKV-7](https://arxiv.org/abs/2504.05097) [[pdf]](https://arxiv.org/pdf/2504.05097) | Liu Xiao, Li Zhiyuan, Lin Yueyu | arXiv preprint |
| 2025-02 | [Enhancing RWKV-based Language Models for Long-Sequence Text Generation](https://arxiv.org/abs/2502.15485) [[pdf]](https://arxiv.org/pdf/2502.15485) | Xinghan Pan | arXiv preprint |

## Hardware & Efficiency

Quantization, compression and dedicated hardware accelerators (FPGA, on-chip, neuromorphic) for RWKV inference.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-05 | [SABRE: A Compression-Aware BF16 Accelerator for Neuromorphic Attention](https://doi.org/10.1145/3801487.3801814) | K. Kishore, Manish Nagaraju, Anshul Raghavendra Katti et al. | ACM International Conference on Computing Frontiers |
| 2026-01 | [HFRWKV: A High-Performance Fully On-Chip Hardware Accelerator for RWKV](https://arxiv.org/abs/2601.02135) [[pdf]](https://arxiv.org/pdf/2601.02135) | Liu Shijie, Zeng Zhenghao, Jiao Han et al. | Symposium on Field Programmable Gate Arrays |
| 2025-10 | [Robin: RWKV Accelerator using Block Circulant Matrices based on FPGA](https://doi.org/10.1109/ICCAD66269.2025.11240845) | Ze-Yu Li, Shan Li, Chu-Yi Dai et al. | 2025 IEEE/ACM International Conference On Computer Aided Design (ICCAD) |
| 2025-05 | [RWKVQuant: Quantizing the RWKV Family with Proxy Guided Hybrid of Scalar and Vector Quantization](https://arxiv.org/abs/2505.03803) [[pdf]](https://arxiv.org/pdf/2505.03803) | Chen Xu, Yuxuan Yue, Zukang Xu et al. | International Conference on Machine Learning |
| 2024-12 | [RWKV-edge: Deeply Compressed RWKV for Resource-Constrained Devices](https://arxiv.org/abs/2412.10856) [[pdf]](https://arxiv.org/pdf/2412.10856) | Wonkyo Choe, Yangfeng Ji, Felix Xiaozhu Lin | arXiv preprint |

## NLP & Language Applications

RWKV language models applied to translation, code, moderation, compression, domain LLMs, knowledge graphs and decoding.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-06 | [Learnable Contrastive Decoding for Dehallucination in LLMs](https://doi.org/10.1109/IJCNN69854.2026.11729508) | Jen-Tzung Chien, Chao-Chi Li | IEEE International Joint Conference on Neural Network |
| 2026-04 | [Research on Specific Domain Terminology Extraction and QA Pair Generation Based on Large Language Models](https://doi.org/10.1145/3829441.3829510) | Xiao J. Chen, Jun Yang | Proceedings of the 2026 3rd International Conference on Machine Learning and Intelligent Computing |
| 2025-07 | [LowKeyEMG: Electromyographic typing with a reduced keyset](https://arxiv.org/abs/2507.19736) [[pdf]](https://arxiv.org/pdf/2507.19736) | Johannes Y. Lee, Derek Xiao, Shreyas Kaasyap et al. | arXiv preprint |
| 2025-06 | [CMGN: Text GNN and RWKV MLP-mixer combined with cross-feature fusion for fake news detection](https://doi.org/10.1016/j.neucom.2025.129811) | ShaoDong Cui, Kaibo Duan, Wen Ma et al. | Neurocomputing |
| 2025-02 | [PCF-RWKV: Large Language Model for Product Carbon Footprint Estimation](https://doi.org/10.3390/su17031321) | Zhen Li, Pei-Hao Tang, Xuanlin Wang et al. | Sustainability |
| 2024-12 | [Efficient relational context perception for knowledge graph completion](https://arxiv.org/abs/2501.00397) [[pdf]](https://arxiv.org/pdf/2501.00397) | Wen-Kai Tu, Guo-Jia Wan, Zhengchun Shang et al. | Applied intelligence (Boston) |
| 2024-12 | [L3TC: Leveraging RWKV for Learned Lossless Low-Complexity Text Compression](https://arxiv.org/abs/2412.16642) [[pdf]](https://arxiv.org/pdf/2412.16642) | Junxuan Zhang, Zhengxue Cheng, Yan Zhao et al. | AAAI Conference on Artificial Intelligence |
| 2024-09 | [Experimentation in Content Moderation using RWKV](https://arxiv.org/abs/2409.03939) [[pdf]](https://arxiv.org/pdf/2409.03939) | Umut Yildirim, Rohan Dutta, Burak Yildirim et al. | arXiv preprint |
| 2024-08 | [OnlySportsLM: Optimizing Sports-Domain Language Models with SOTA Performance under Billion Parameters](https://arxiv.org/abs/2409.00286) [[pdf]](https://arxiv.org/pdf/2409.00286) | Zexin Chen, Chengxi Li, Xiangyu Xie et al. | ENLSP |
| 2023-11 | [RWKV-based Encoder-Decoder Model for Code Completion](https://doi.org/10.1109/EIECT60552.2023.10442108) | Lu Zhou, Zhonglin Xiao, Zhipeng Ning | 2023 3rd International Conference on Electronic Information Engineering and Computer (EIECT) |
| 2023 | [An Approach to Mongolian Neural Machine Translation Based on RWKV Language Model and Contrastive Learning](https://doi.org/10.1007/978-981-99-8132-8_25) | Xu Liu, Yi-La Su, Ni-Er Wu et al. | International Conference on Neural Information Processing |

## Multimodal & Vision-Language

Vision-language models, CLIP-style representation learning, visual grounding, tracking and other cross-modal RWKV systems.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-06 | [MMCGR: A multimodal cascaded gated fusion RWKV-based model for emotion recognition in conversations](https://doi.org/10.1016/j.neucom.2026.133424) | Bo He, Hao Han, Ruoyu Zhao | Neurocomputing |
| 2026-04 | [PestVL-Net: Enabling Multimodal Pest Learning via Fine-grained Vision-Language Interaction](https://arxiv.org/abs/2604.17278) [[pdf]](https://arxiv.org/pdf/2604.17278) | Xueheng Li, Tao Hu, Ke Cao et al. | 2026 IEEE/CVF Conference on Computer Vision and Pattern Recognition- FINDINGS Track (CVPRF) |
| 2026 | [TemLo: Temporal-Local Synergy Enhanced RWKV for Audio-Visual Segmentation](https://doi.org/10.1109/TMM.2026.3694536) | Yun-Zhi Zhuge, Meng-Yuan Zhu, Si-Tong Gong et al. | IEEE transactions on multimedia |
| 2026 | [RWKV-Inspired Multi-Modal Relation Modeling for Vision-Language Tracking](https://doi.org/10.1109/TMM.2026.3668700) | Guang-Tong Zhang, Yang Wang, Bi-Neng Zhong et al. | IEEE transactions on multimedia |
| 2026 | [基于STM32微控制器的MCUVLM⁃RWKV视觉⁃语言模型研究](https://doi.org/10.62756/jnuc.issn.1673-3193.2025.09.0014) | Zhongnuo Zhu, Xingling Shao, Xiuyuan Li et al. | Journal of North University of China |
| 2025-08 | [A Multimodal Bone Stick Matching Approach Based on Large-Scale Pre-Trained Models and Dynamic Cross-Modal Feature Fusion](https://doi.org/10.3390/app15158681) | Tao-Sha Fan, Hui-Qin Wang, Ke Wang et al. | Applied Sciences |
| 2025-05 | [ModRWKV: Transformer Multimodality in Linear Time](https://arxiv.org/abs/2505.14505) [[pdf]](https://arxiv.org/pdf/2505.14505) | Jiale Kang, Ziyin Yue, Qingyu Yin et al. | arXiv preprint |
| 2025-04 | [Cross-attention for State-based model RWKV-7](https://arxiv.org/abs/2504.14260) [[pdf]](https://arxiv.org/pdf/2504.14260) | Liu Xiao, Li Zhiyuan, Lin Yueyu | arXiv preprint |
| 2025-02 | [Rwkv-vg: visual grounding with RWKV-driven encoder-decoder framework](https://doi.org/10.1007/s00530-025-01720-w) | Fudong Nian, Yanhong Gu, Wentao Wang et al. | Multimedia Systems |
| 2025-02 | [RWKV-UI: UI Understanding with Enhanced Perception and Reasoning](https://arxiv.org/abs/2502.03971) [[pdf]](https://arxiv.org/pdf/2502.03971) | Jiaxi Yang, Haowen Hou | IEEE International Conference on Multimedia and Expo |
| 2024-10 | [VisualRWKV-HD and UHD: Advancing High-Resolution Processing for Visual Language Models](https://arxiv.org/abs/2410.11665) [[pdf]](https://arxiv.org/pdf/2410.11665) | Zihang Li, Haowen Hou | arXiv preprint |
| 2024-06 | [VisualRWKV: Exploring Recurrent Neural Networks for Visual Language Models](https://arxiv.org/abs/2406.13362) [[pdf]](https://arxiv.org/pdf/2406.13362) | Haowen Hou, Peigen Zeng, Fei Ma et al. | International Conference on Computational Linguistics |
| 2024-06 | [RWKV-CLIP: A Robust Vision-Language Representation Learner](https://arxiv.org/abs/2406.06973) [[pdf]](https://arxiv.org/pdf/2406.06973) | Tiancheng Gu, Kaicheng Yang, Xiang An et al. | Conference on Empirical Methods in Natural Language Processing |

## Computer Vision

Vision-RWKV backbones, segmentation, detection, image generation/diffusion, style transfer and pose estimation.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-11 | [Advancing multi-task dense prediction with RWKV: A unified approach to perception and interaction](https://doi.org/10.1016/j.patcog.2026.115305) | Yun-Zhi Zhuge, Si-Tong Gong, Lu Zhang et al. | Pattern Recognition |
| 2026-11 | [Structural Calibration of Dual Stream Collaborative Cues Within a Lightweight RWKV Network for Pixel-Level Crack Segmentation](https://doi.org/10.1109/TII.2026.3706792) | Han-Xu Zhang, Jiang-Yu Zheng, Chen Jia et al. | IEEE Transactions on Industrial Informatics |
| 2026-08 | [Compass: Degradation-Simulated Reciprocal Learning with Lightweight Needle RWKV for Multimodal Crack Segmentation under Missing Modalities](https://arxiv.org/abs/2608.03559) [[pdf]](https://arxiv.org/pdf/2608.03559) | Hui Liu, Chen Jia, Fan Shi et al. | arXiv preprint |
| 2026-07 | [The impact of scanning methods on object detection performance with Mamba and RWKV](https://doi.org/10.1117/12.3116985) | Dongfu Yin, Bao-Chao Zhang | International Conference on Computer Vision and Augmented Reality (CVAR 2026) |
| 2026-05 | [SCRWKV: Ultra-Compact Structure-Calibrated Vision-RWKV for Topological Crack Segmentation](https://arxiv.org/abs/2605.14926) [[pdf]](https://arxiv.org/pdf/2605.14926) | Hanxu Zhang, Chen Jia, Hui Liu et al. | arXiv preprint |
| 2026-03 | [PoseRWGCN: an attention-free dual-stream RWKV-GCN architecture for real-time 3D human pose estimation](https://doi.org/10.1007/s40747-026-02239-x) | Lintao Song, Dezheng Cao, Zixin Li et al. | Complex & Intelligent Systems |
| 2025-06 | [Enhanced Traffic Sign Recognition via RWKV with Deformable Attention](https://doi.org/10.1145/3757749.3757779) | Jia-Hao Guo | Proceedings of the 2025 2nd International Conference on Computer and Multimedia Technology |
| 2025-04 | [RGB-Event based Pedestrian Attribute Recognition: A Benchmark Dataset and An Asymmetric RWKV Fusion Framework](https://arxiv.org/abs/2504.10018) [[pdf]](https://arxiv.org/pdf/2504.10018) | Xiao Wang, Haiyang Wang, Shiao Wang et al. | Computer Vision and Pattern Recognition |
| 2025-02 | [Substation equipment non-rigid defect detection via receptance weighted key value-based causality-aware networks](https://doi.org/10.1007/s11760-025-03852-y) | Man-Jia Liu, Chao Cai, Ming-Liu Liu et al. | Signal, Image and Video Processing |
| 2025 | [DEVR: Train an Efficient Vision-RWKV Model with Improved Knowledge Distillation](https://doi.org/10.1007/978-981-96-9794-6_29) | Xuhong Li, Li-Min Zeng, Jianjun Liu | International Conference on Intelligent Computing |
| 2024-12 | [StyleRWKV: High-Quality and High-Efficiency Style Transfer with RWKV-like Architecture](https://arxiv.org/abs/2412.19535) [[pdf]](https://arxiv.org/pdf/2412.19535) | Miaomiao Dai, Qianyu Zhou, Lizhuang Ma | IEEE International Conference on Multimedia and Expo |
| 2024-06 | [Mamba or RWKV: Exploring High-Quality and High-Efficiency Segment Anything Model](https://arxiv.org/abs/2406.19369) [[pdf]](https://arxiv.org/pdf/2406.19369) | Haobo Yuan, Xiangtai Li, Lu Qi et al. | arXiv preprint |
| 2024-04 | [Diffusion-RWKV: Scaling RWKV-Like Architectures for Diffusion Models](https://arxiv.org/abs/2404.04478) [[pdf]](https://arxiv.org/pdf/2404.04478) | Zhengcong Fei, Mingyuan Fan, Changqian Yu et al. | arXiv preprint |
| 2024-03 | [Vision-RWKV: Efficient and Scalable Visual Perception with RWKV-Like Architectures](https://arxiv.org/abs/2403.02308) [[pdf]](https://arxiv.org/pdf/2403.02308) | Yuchen Duan, Weiyun Wang, Zhe Chen et al. | International Conference on Learning Representations |

## Image Restoration, Enhancement & Fusion

Low-level vision with RWKV: denoising, deraining, dehazing, low-light enhancement, super-resolution, image compression and image fusion.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-11 | [Neural Image Compression with Internal-External Prior Fusion and Alignment](https://arxiv.org/abs/2611.07644) [[pdf]](https://arxiv.org/pdf/2611.07644) | Tiancheng Si, Wenlong Xu, Dahua Gao | arXiv preprint |
| 2026-09 | [Structure-Aware Deep Unfolding Network for Face Super-Resolution With Global--Local Modeling](https://doi.org/10.1109/TCSVT.2026.3697402) | Chen-Yang Wang, Jun-Jun Jiang, Zhi-Wei Zhong et al. | IEEE transactions on circuits and systems for video technology (Print) |
| 2026-08 | [Learning to Prefer: Reward-Driven Infrared-Visible Fusion via RWKV](https://doi.org/10.1016/j.inffus.2026.104685) | Jialing Huang, Ying-Ying Wang, Xuan-Hua He et al. | Information Fusion |
| 2026-07 | [CLUIE: Clustering-Aware Recurrent Propagation with Local Structural Compensation for Underwater Image Enhancement](https://arxiv.org/abs/2607.21467) [[pdf]](https://arxiv.org/pdf/2607.21467) | Kui Jiang, Zefan Feng, Laibin Chang et al. | arXiv preprint |
| 2026-05 | [Trifusion-RWKV for Complex Degradation Restoration in Library and Archive Environments](https://doi.org/10.1109/CSCWD68734.2026.11582222) | Yong Cui, Rui Deng, Liyang Yu | International Conference on Computer Supported Cooperative Work in Design |
| 2026-05 | [RWKV-Enhanced Infrared and Visible Image Fusion: Capturing Long-Range Dependencies with Cross-Modality Correlations](https://doi.org/10.1109/PRMVAI70103.2026.11605729) | Xing-Yuan Guo, Jia-Sheng Xie, Su-Li Zhang et al. | 2026 IEEE International Conference on Pattern Recognition, Machine Vision and Artificial Intelligence (PRMVAI) |
| 2026-04 | [RICEFuse: A RWKV-based information complementarity enhancement network for infrared-visible image fusion](https://doi.org/10.1016/j.infrared.2026.106559) | Chenyoukang Lin, Tao Liu, Zilong Xue et al. | Infrared Physics &amp; Technology |
| 2026-03 | [Towards Controllable Low-Light Image Enhancement: A Continuous Multi-illumination Dataset and Efficient State Space Framework](https://arxiv.org/abs/2603.25296) [[pdf]](https://arxiv.org/pdf/2603.25296) | Hongru Han, Tingrui Guo, Liming Zhang et al. | arXiv preprint |
| 2026 | [Degradation-Aware Blind Light-Field Image Quality Assessment With Linear Attention](https://doi.org/10.1109/LSP.2026.3702589) | Youzhi Zhang, Jian-Yu Qian, De-Yang Liu et al. | IEEE Signal Processing Letters |
| 2025-12 | [Fourier-RWKV: A Multi-State Perception Network for Efficient Image Dehazing](https://arxiv.org/abs/2512.08161) [[pdf]](https://arxiv.org/pdf/2512.08161) | Lirong Zheng, Yanshan Li, Rui Yu et al. | arXiv preprint |
| 2025-11 | [RawRWKV : An efficient raw image enhancement framework via RWKV architecture](https://doi.org/10.1007/s11760-025-04940-9) | Xing-Bo Dong, Yongzhou Liu, Zhe Jin et al. | Signal, Image and Video Processing |
| 2025-11 | [MRT: Learning Compact Representations with Mixed RWKV-Transformer for Extreme Image Compression](https://arxiv.org/abs/2511.06717) [[pdf]](https://arxiv.org/pdf/2511.06717) | Han Liu, Hengyu Man, Xingtao Wang et al. | AAAI Conference on Artificial Intelligence |
| 2025-10 | [Learning Structural Priors via Laplacian RWKV Diffusion with Light-Effect Dataset for Nighttime Visibility Enhancement](https://doi.org/10.1145/3746027.3755510) | Di-Rui Xie, Xiao-Fang Hu, Zi-Han Wei et al. | ACM Multimedia |
| 2025-08 | [Hybrid CNN-RWKV with high-frequency enhancement for real-world chinese-english scene text image super-resolution](https://doi.org/10.1007/s10489-025-06785-8) | Yanbin Liu, Yu Zhu, Hangyu Li et al. | Applied intelligence (Boston) |
| 2025-07 | [DRWKV: Focusing on Object Edges for Low-Light Image Enhancement](https://arxiv.org/abs/2507.18594) [[pdf]](https://arxiv.org/pdf/2507.18594) | Xuecheng Bai, Yuxiang Wang, Boyu Hu et al. | arXiv preprint |
| 2025-07 | [An Efficient Image Fusion Network Exploiting Unifying Language and Mask Guidance](https://doi.org/10.1109/TPAMI.2025.3591930) | Zi-Han Cao, Yu-jie Liang, Liang-Jian Deng et al. | IEEE Transactions on Pattern Analysis and Machine Intelligence |
| 2025-07 | [EvRWKV: A Continuous Interactive RWKV Framework for Effective Event-Guided Low-Light Image Enhancement](https://arxiv.org/abs/2507.03184) [[pdf]](https://arxiv.org/pdf/2507.03184) | Wenjie Cai, Qingguo Meng, Zhenyu Wang et al. | IEEE transactions on circuits and systems for video technology (Print) |
| 2025-06 | [Exploring Diffusion with Test-Time Training on Efficient Image Restoration](https://arxiv.org/abs/2506.14541) [[pdf]](https://arxiv.org/pdf/2506.14541) | Rongchang Lu, Tianduo Luo, Yunzhi Jiang et al. | arXiv preprint |
| 2025-05 | [URWKV: Unified RWKV Model with Multi-state Perspective for Low-light Image Restoration](https://arxiv.org/abs/2505.23068) [[pdf]](https://arxiv.org/pdf/2505.23068) | Rui Xu, Yuzhen Niu, Yuezhou Li et al. | Computer Vision and Pattern Recognition |
| 2025-05 | [RainRWKV: a deep RWKV model for video deraining](https://doi.org/10.1007/s00371-025-03965-y) | Xi-Jun Wang, Xin Zhou, Yi Wang et al. | The Visual Computer |
| 2025-05 | [Multi-View Learning with Context-Guided Receptance for Image Denoising](https://arxiv.org/abs/2505.02705) [[pdf]](https://arxiv.org/pdf/2505.02705) | Binghong Chen, Tingting Chai, Wei Jiang et al. | arXiv preprint |
| 2025-04 | [Multiple Span Bidirectional RWKV Network for Infrared Image Super-Resolution](https://doi.org/10.1007/s13042-025-02644-7) | Zhaofei Xu, Ye-Cong Wan, Yuanshuo Cheng et al. | International Journal of Machine Learning and Cybernetics |
| 2025-04 | [Toward Comprehensive Semantic Prompt for Region Contrastive Learning Underwater Image Enhancement](https://doi.org/10.1109/ICASSP49660.2025.10888780) | Xiao Wang, Yongsheng Fu, Wei Wang et al. | IEEE International Conference on Acoustics, Speech, and Signal Processing |
| 2025-04 | [Flare-Aware RWKV for Flare Removal](https://doi.org/10.1109/ICASSP49660.2025.10888487) | Wan-Ying Zhang, Wei Shang, Dongwei Ren et al. | IEEE International Conference on Acoustics, Speech, and Signal Processing |
| 2025-04 | [ID-RWKV: Image Deraining RWKV](https://doi.org/10.1109/ICASSP49660.2025.10889384) | Y. Yang, Jia-Xuan Yang, Shu-Ying Huang | IEEE International Conference on Acoustics, Speech, and Signal Processing |
| 2025-02 | [Linear Attention Modeling for Learned Image Compression](https://arxiv.org/abs/2502.05741) [[pdf]](https://arxiv.org/pdf/2502.05741) | Donghui Feng, Zhengxue Cheng, Shen Wang et al. | Computer Vision and Pattern Recognition |
| 2025-02 | [Exploring Linear Attention Alternative for Single Image Super-Resolution](https://arxiv.org/abs/2502.00404) [[pdf]](https://arxiv.org/pdf/2502.00404) | Rongchang Lu, Changyu Li, Donghang Li et al. | IEEE International Joint Conference on Neural Network |
| 2025 | [Geometry-Aware RWKV for Heterogeneous Light Field Spatial Super-Resolution](https://doi.org/10.1109/LSP.2025.3555445) | Ze-An Chen, Ye-Yao Chen, Lin-Wei Zhu et al. | IEEE Signal Processing Letters |
| 2024-12 | [Exploring Real&Synthetic Dataset and Linear Attention in Image Restoration](https://arxiv.org/abs/2412.03814) [[pdf]](https://arxiv.org/pdf/2412.03814) | Yuzhen Du, Teng Hu, Jiangning Zhang et al. | arXiv preprint |

## Medical & Biomedical

Medical image segmentation, restoration, translation and registration, plus biomedical signal analysis (EEG, fMRI, sleep staging).

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-10 | [Volute Scanning-Empowered Hierarchical RWKV for Robust Polyp Segmentation](https://doi.org/10.1109/JIOT.2026.3719261) | Ming-Hao Tang, Yong-Ping Jiang, Wei-Na Ding et al. | IEEE Internet of Things Journal |
| 2026-10 | [Multi-direction shift RWKV and frequency-aware semantic network with for ultrasound image segmentation](https://doi.org/10.1088/2631-8695/aeb473) | Jiang-Xiong Fang, Yi-Ming Ge, Dan-Jiang Huang et al. | Engineering Research Express |
| 2026-10 | [SGF-RWKV: Semantic-Guided and Frequency-Enhanced RWKV for Unified Medical Image Denoising.](https://doi.org/10.1109/JBHI.2026.3739849) | Wen-Jun Zhang, Xiang-Hong Wang, Yu Zeng et al. | IEEE journal of biomedical and health informatics |
| 2026-09 | [SRWKV: A Shape-Guided RWKV With Adaptive Receptive Fields for Efficient Medical Image Segmentation.](https://doi.org/10.1109/TNNLS.2026.3727882) | Chun-Li Yu, Yin-Hao Li, Zheng Zhao et al. | IEEE Transactions on Neural Networks and Learning Systems |
| 2026-08 | [TriAIF-RWKV: A Physiology-Guided Spatiotemporal Framework for Robust Arterial Input Function Selection in CT Perfusion Imaging](https://doi.org/10.3390/e28090944) | Lei Lei, Yu Shen, Da-Wei Wang et al. | Entropy |
| 2026-08 | [MSFusion: Multi-Scale Cross-Modal Fusion with Adaptive Attention for Multimodal Medical Image Fusion](https://doi.org/10.3390/bios16080423) | Liu Wang, Yang Zhou, Wen-Jia Li et al. | Biosensors |
| 2026-07 | [SegRWKV: Fast and accurate biomedical image segmentation via a receptance-weighted key-value network](https://doi.org/10.1093/jcde/qwag065) | Tian-Yu Cao, Ming-Yao Ma, Haoxiang Zhang et al. | Journal of Computational Design and Engineering |
| 2026-06 | [SpatioPrompt: Learning Spatial Attention and Dynamic Prompts for Few-Shot Medical Image Anomaly Detection.](https://doi.org/10.1109/JBHI.2026.3706621) | Liqiang Song, Yu Zhu, Jun-Li Zhao et al. | IEEE journal of biomedical and health informatics |
| 2026-05 | [RWKV-AGF: An Adaptive Guided-Filter Attention Network for Retinal Vessel Segmentation](https://doi.org/10.1145/3841905.3841928) | Guang Song | Proceedings of the 5th International Conference on Biomedical and Intelligent Systems |
| 2026-05 | [MF-RWKV: A Multi-Scale Feature Fusion Network Based on RWKV for Brain Tumor Image Segmentation](https://doi.org/10.1109/CVIDL70130.2026.11637895) | Weiman Xiao, Gang Wang, Tao Zhang et al. | 2026 7th International Conference on Computer Vision, Image and Deep Learning (CVIDL) |
| 2026-05 | [STAR-UNet: Multi-Branch Parallel Fusion and Global Sequential Spatial Adaptive Learning for Retinal Vessel Segmentation](https://doi.org/10.1109/CVIDL70130.2026.11637506) | Hai-Bo Xu | 2026 7th International Conference on Computer Vision, Image and Deep Learning (CVIDL) |
| 2026-05 | [MMSegRWKV: Enhancing Multimodal MRI Segmentation for Internet-of-Medical-Things-Enabled Healthcare With RWKV-Inspired Architectures](https://doi.org/10.1109/JIOT.2026.3661927) | Yi-Tong Cao, Yuan-Qing Xia, Ke Tian et al. | IEEE Internet of Things Journal |
| 2026-04 | [Spec-RWKV: A Spectrum-Guided Multi-Scale Recurrent Modeling Framework for Multi-Center Resting-State fMRI-Assisted Diagnosis](https://doi.org/10.3390/brainsci16050455) | Sihang Peng, Qi Xu | Brain Science |
| 2026-04 | [Enhanced X-ray image denoising via the synergy of linear attention and convolution](https://doi.org/10.1177/08953996261439076) | Yue Fei, Xiao-Long Zheng, W. Tong et al. | Journal of X-Ray Science and Technology |
| 2026-04 | [RWKVFUSE: Parallel Encoders Network for Medical Image Segmentation](https://doi.org/10.1109/ISBI61048.2026.11515577) | Ahmed Al-Qurri, Mohammad Sabih, M. Almekkawy | IEEE International Symposium on Biomedical Imaging |
| 2026-03 | [MD-RWKV-UNet: Scale-Aware Anatomical Encoding with Cross-Stage Fusion for Multi-Organ Segmentation](https://arxiv.org/abs/2603.27261) [[pdf]](https://arxiv.org/pdf/2603.27261) | Zhuoyi Fang | arXiv preprint |
| 2026-03 | [SCEAF-UNet: Medical image segmentation based on spatial-channel feature enhancement and adaptive fusion](https://doi.org/10.1371/journal.pone.0345538) | Lingyun Zhao, Yanping Chen, Chao Wang et al. | PLoS ONE |
| 2026-02 | [Surv-RWKV: Cross-modal receptance weighted key-value interaction with optimal transport feature alignment for survival analysis](https://doi.org/10.1016/j.eswa.2026.131506) | Xiyan Kuang, Bin Yang, B. Ling et al. | Expert systems with applications |
| 2026-02 | [MS-RWKV-UNet: Multi-Head Scan Receptance Weighted Key Value UNet for Medical Image Segmentation](https://doi.org/10.1051/wujns/2026311001) | Dong Jiang, Zhong-Ping Ji, Meie Fang | Wuhan University Journal of Natural Sciences |
| 2026-01 | [U-Shaped Diffusion-RWKV with Vision-Alignment for High-Fidelity Unsupervised Medical Image Translation](https://doi.org/10.1145/3804601.3804694) | Xujie Zhu, Shancheng Jiang, Qingling Cai | Proceedings of the 5th International Conference on Computer, Artificial Intelligence and Control Engineering |
| 2026-01 | [U-RWKV: Accurate and Efficient Volumetric Medical Image Segmentation via RWKV](https://doi.org/10.1109/TIP.2026.3654389) | Hong-Yu Cai, Yi-Fan Wang, Liu Wang et al. | IEEE Transactions on Image Processing |
| 2026 | [LB-RiR: Lateral and Boundary-Aware RWKV-in-RWKV for Esophageal OCT Segmentation](https://doi.org/10.1109/ACCESS.2026.3713673) | Meng Gan, Cong Wang | IEEE Access |
| 2026 | [HyperRWKV: Mimicking Human Visual Perception with Hypergraph RWKV for Medical Image Segmentation](https://doi.org/10.1007/978-981-92-3495-0_2) | Ziyang Zhang, Shi-Han Liu, Xin-Yi Li et al. | International Conference on Intelligent Computing |
| 2026 | [X2Bone: Reconstructing 3D Bone Structures from 2D Biplanar X-Rays via Cross-RWKV](https://doi.org/10.1007/978-3-032-38186-6_38) | Zhao-Hong Pan, Jia-Hua Zhu, Hao-Wei Zhou et al. | International Conference on Medical Image Computing and Computer-Assisted Intervention |
| 2026 | [FA-Diff: Leveraging Frequency-Aware RWKV Diffusion for OCT to Correlation-Stability Map Translation](https://doi.org/10.1007/978-3-032-38260-3_20) | Chuan-Hao Zhang, Yang-Xi Li, Jian-Ping Song et al. | International Conference on Medical Image Computing and Computer-Assisted Intervention |
| 2026 | [SleepRWKVNet: A multimodal sleep staging network integrating bidirectional interactive RWKV and physiological prior-driven sequence-aware loss](https://doi.org/10.1016/j.bspc.2025.108713) | Hang Zhang, Qi Li, Yun-Fei Zhu et al. | Biomedical Signal Processing and Control |
| 2025-12 | [IESS-FusionNet: Physiologically Inspired EEG-EMG Fusion with Linear Recurrent Attention for Infantile Epileptic Spasms Syndrome Detection](https://doi.org/10.3390/bioengineering13010057) | Jun-Yuan Feng, Zhenzhen Liu, Lin-Lin Shen et al. | Bioengineering |
| 2025-12 | [A Multi-Scale Attention-Enhanced RWKV for Cross-Level Medical Image Segmentation](https://doi.org/10.1109/AIBDF67964.2025.11440735) | Xiangbiao Cao, Xiao-Wen Shi, Yong-Qiang Tang et al. | 2025 5th International Symposium on Artificial Intelligence and Big Data (AIBDF) |
| 2025-12 | [DME-RWKV: An Interpretable Multimodal Deep Learning Framework for Predicting Anti-VEGF Response in Diabetic Macular Edema](https://doi.org/10.3390/bioengineering13010012) | Yan Liu, Xie-Yang Xu, Jia-Ying Zhang et al. | Bioengineering |
| 2025-12 | [Dense-RWKV: A More Effective UNet for Medical Image Translation](https://doi.org/10.1109/ICVRV67992.2025.00036) | Fu-You Mao, Bei-Ning Wu, Yan-Feng Jiang et al. | International Conference on Virtual Reality and Visualization |
| 2025-11 | [AFF-UNet-RWKV: A Medical Image Deblurring Network with Multi-scale Attention and Lightweight RWKV Modules](https://doi.org/10.1109/ICICML67980.2025.11333678) | Jiaqiang Wei | 2025 4th International Conference on Image Processing, Computer Vision and Machine Learning (ICICML) |
| 2025-11 | [AFF-UNet-RWKV: A Lightweight Model for High-Quality Deblurring in Medical Imaging](https://doi.org/10.56028/aetr.15.1.1261.2025) | Z. Qin | Advances in Engineering Technology Research |
| 2025-10 | [ITC-RWKV: Interactive Tissue-Cell Modeling with Recurrent Key-Value Aggregation for Histopathological Subtyping](https://arxiv.org/abs/2510.21479) [[pdf]](https://arxiv.org/pdf/2510.21479) | Yating Huang, Qijun Yang, Lintao Xiang et al. | arXiv preprint |
| 2025-10 | [Dil-RWKV: A Hybrid Framework for Automated AIF Selection and Enhanced Hemodynamic Quantification in Dynamic Contrast - Enhanced Medical Imaging](https://doi.org/10.1109/ICSPS66615.2025.11347848) | Jia-Xuan Zhang, Yu Shen, Feng Xi et al. | International Conference on Signal Processing Systems |
| 2025-10 | [FS-RWKV: Leveraging Frequency Spatial-Aware RWKV for 3T-to-7T MRI Translation](https://arxiv.org/abs/2510.08951) [[pdf]](https://arxiv.org/pdf/2510.08951) | Yingtie Lei, Zimeng Li, Chi-Man Pun et al. | IEEE International Conference on Bioinformatics and Biomedicine |
| 2025-09 | [DPC-QA Net: A No-Reference Dual-Stream Perceptual and Cellular Quality Assessment Network for Histopathology Images](https://arxiv.org/abs/2509.15802) [[pdf]](https://arxiv.org/pdf/2509.15802) | Qijun Yang, Boyang Wang, Hujun Yin | arXiv preprint |
| 2025-07 | [U-RWKV: Lightweight medical image segmentation with direction-adaptive RWKV](https://arxiv.org/abs/2507.11415) [[pdf]](https://arxiv.org/pdf/2507.11415) | Hongbo Ye, Fenghe Tang, Peiang Zhao et al. | International Conference on Medical Image Computing and Computer-Assisted Intervention |
| 2025-06 | [[Thyroid nodule segmentation method integrating receiving weighted key-value architecture and spherical geometric features].](https://doi.org/10.7507/1001-5515.202412009) | Licheng Zhu, GuoHui Wei | Sheng wu yi xue gong cheng xue za zhi = Journal of biomedical engineering = Shengwu yixue gongchengxue zazhi |
| 2025-06 | [Med-URWKV†: Toward Enhanced Pretrained Pure VRWKV Models for Medical Image Segmentation](https://arxiv.org/abs/2506.10858) [[pdf]](https://arxiv.org/pdf/2506.10858) | Zhenhuan Zhou, Yining Li, Yanlin Wu et al. | arXiv preprint |
| 2025-04 | [Zig-RiR: Zigzag RWKV-in-RWKV for Efficient Medical Image Segmentation](https://doi.org/10.1109/TMI.2025.3561797) | Tian-Xiang Chen, Xudong Zhou, Zhentao Tan et al. | IEEE Transactions on Medical Imaging |
| 2025-04 | [RWKVMatch: Vision RWKV-based Multi-scale Feature Matching Network for Unsupervised Deformable Medical Image Registration](https://doi.org/10.1109/ICASSP49660.2025.10888484) | Zixuan He, Jing Tang, Zi-Tong Zhao et al. | IEEE International Conference on Acoustics, Speech, and Signal Processing |
| 2025-04 | [HFE-RWKV: High-Frequency Enhanced RWKV Model for Efficient Left Ventricle Segmentation in Pediatric Echocardiograms](https://doi.org/10.1109/ICASSP49660.2025.10888300) | Zi Ye, Tian-Xiang Chen, Ziyang Wang et al. | IEEE International Conference on Acoustics, Speech, and Signal Processing |
| 2025-02 | [Delta-WKV: A Novel Meta-in-Context Learner for MRI Super-Resolution](https://arxiv.org/abs/2502.20852) [[pdf]](https://arxiv.org/pdf/2502.20852) | Rongchang Lu, Bingcheng Liao, Haowen Hou et al. | arXiv preprint |
| 2025-01 | [RWKV-UNet: Improving UNet with Long-Range Cooperation for Effective Medical Image Segmentation](https://arxiv.org/abs/2501.08458) [[pdf]](https://arxiv.org/pdf/2501.08458) | Juntao Jiang, Jiangning Zhang, Weixuan Liu et al. | arXiv preprint |
| 2024-10 | [BSBP-RWKV: Background Suppression with Boundary Preservation for Efficient Medical Image Segmentation](https://doi.org/10.1145/3664647.3681033) | Xudong Zhou, Tian-Xiang Chen | ACM Multimedia |
| 2024-07 | [Restore-RWKV: Efficient and Effective Medical Image Restoration with RWKV](https://arxiv.org/abs/2407.11087) [[pdf]](https://arxiv.org/pdf/2407.11087) | Zhiwen Yang, Jiayin Li, Hui Zhang et al. | IEEE journal of biomedical and health informatics |

## Remote Sensing & Earth Observation

Pan-sharpening, hyperspectral imaging, change detection, semantic segmentation, sonar and weather radar with RWKV.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-08 | [IceRWKV: A Novel River Ice Segmentation Network Based on Context Clustering RWKV](https://doi.org/10.3390/rs18162683) | Shi-Yang Fu, Lanbin Li, Mozi Gao et al. | Remote Sensing |
| 2026-06 | [Random shuffle high-order RWKV for pan-sharpening](https://doi.org/10.1016/j.inffus.2026.104545) | Man Zhou, Xue-Heng Li, Xuan-Hua He et al. | Information Fusion |
| 2026-04 | [Multigrain-aware Semantic Prototype Scanning and Tri-Token Prompt Learning Embraced High-Order RWKV for Pan-Sharpening](https://arxiv.org/abs/2604.14622) [[pdf]](https://arxiv.org/pdf/2604.14622) | Junfeng Li, Wenyang Zhou, Xueheng Li et al. | Computer Vision and Pattern Recognition |
| 2026-04 | [RWKVSR: Receptance Weighted Key-Value Network for Hyperspectral Image Super-Resolution](https://doi.org/10.1109/TCSVT.2025.3626779) | Xiao-Fei Yang, Sihuan Li, Wei-Jia Cao et al. | IEEE transactions on circuits and systems for video technology (Print) |
| 2026-03 | [Beyond Quadratic: Linear-Time Change Detection with RWKV](https://arxiv.org/abs/2603.19606) [[pdf]](https://arxiv.org/pdf/2603.19606) | Zhenyu Yang, Gensheng Pei, Tao Chen et al. | AAAI Conference on Artificial Intelligence |
| 2026-01 | [Hi-RWKV: Hierarchical RWKV Modeling for Hyperspectral Image Classification](https://doi.org/10.1109/TIP.2025.3648554) | Yunbiao Wang, Dong-Bo Yu, Ye Tao et al. | IEEE Transactions on Image Processing |
| 2026-01 | [MFC-RFNet: A Multi-scale Guided Rectified Flow Network for Radar Sequence Prediction](https://arxiv.org/abs/2601.03633) [[pdf]](https://arxiv.org/pdf/2601.03633) | Wenjie Luo, Chuanhu Deng, Chaorong Li et al. | arXiv preprint |
| 2026 | [RWPNet: A Receptance Weighted Key Value Based Deep Fusion Network for Pansharpening](https://doi.org/10.1109/JSTARS.2026.3734262) | Jian-Wen Hu, Zhao-Cheng Wen, Shao-Sheng Fan et al. | IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing |
| 2026 | [C2F-VRWKV: A Lightweight Clustering-Aware and Cross-Frequency-Enhanced Vision-RWKV Network for Ship Detection in Remote Sensing Scenarios](https://doi.org/10.1109/TGRS.2026.3693340) | Shou-Nan Wang, Chen Jia, Hui Liu et al. | IEEE Transactions on Geoscience and Remote Sensing |
| 2026 | [RWKV-CD: A Vision-RWKV Framework for Building Change Detection From Remotely Sensed Imagery](https://doi.org/10.1109/JSTARS.2026.3677839) | Chun-Yang Liu, Ya-Ting Pan, Tianyang Chen et al. | IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing |
| 2026 | [CMRWNet: Cross-Modal RWKV Network With Window-Guided Alignment for High-Fidelity Pansharpening](https://doi.org/10.1109/JSTARS.2026.3714757) | Chen Ding, Hang-Yuan Lu, Chang Xu et al. | IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing |
| 2026 | [HRWKV-Net: A Hybrid Receptance Weighted Key–Value Network for Remote Sensing Image Super-Resolution](https://doi.org/10.1109/ACCESS.2026.3724708) | Amir Hajian, Takao Onoye, S. Aramvith | IEEE Access |
| 2026 | [HSI-FrFRWKV: Fractional Fourier RWKV for Cross-Scene Coastal Wetland Mapping on Hyperspectral Images](https://doi.org/10.1109/TGRS.2026.3724234) | Wen-Shuai Hu, Guo-Liang Ren, Heng-Chao Li et al. | IEEE Transactions on Geoscience and Remote Sensing |
| 2026 | [End-to-End Optimized Lossless Hyperspectral Image Compression With Bit Partition](https://doi.org/10.1109/TGRS.2026.3667533) | Qizhi Huang, Zhe Zhang, Zhen-Zhong Chen | IEEE Transactions on Geoscience and Remote Sensing |
| 2025-10 | [Freq-RWKV: Granularity-Aware Spatial-Frequency Synergy via Dual-Domain Recurrent Scanning for Pan-sharpening](https://doi.org/10.1145/3746027.3755521) | Xue-Heng Li, Xuan-Hua He, Tao Hu et al. | ACM Multimedia |
| 2025-10 | [SMNet: A Semantic-Guided Mamba Network for Remote Sensing Change Detection](https://doi.org/10.1109/TAES.2025.3580691) | Guo-Xia Xu, Yang Liu, Li-Zhen Deng et al. | IEEE Transactions on Aerospace and Electronic Systems |
| 2025-09 | [Spectral Channel Mixing Transformer with Spectral-Center Attention for Hyperspectral Image Classification](https://doi.org/10.3390/rs17173100) | Zhen-Ming Sun, Hui Liu, Ning Chen et al. | Remote Sensing |
| 2025-08 | [DSM-Seg: A CNN-RWKV Hybrid Framework for Forward-Looking Sonar Image Segmentation in Deep-Sea Mining](https://doi.org/10.3390/rs17172997) | Xinran Liu, Jian-Min Yang, En-Hua Zhang et al. | Remote Sensing |
| 2025-08 | [Lightweight Dual-Encoder UNeXt for Remote Sensing Image Segmentation](https://doi.org/10.1109/IGARSS55030.2025.11243424) | Chun-Xiu He, Yi Tang, Jia-Sheng Xu et al. | IEEE International Geoscience and Remote Sensing Symposium |
| 2025-08 | [HRRS-VRWKV: A Novel Method for High-Resolution Remote Sensing Image Semantic Segmentation](https://doi.org/10.1109/IGARSS55030.2025.11243309) | Hangwei Zhong, Ying Shang, Jiangbo Huang et al. | IEEE International Geoscience and Remote Sensing Symposium |
| 2025-03 | [RSRWKV: A Linear-Complexity 2D Attention Mechanism for Efficient Remote Sensing Vision Task](https://arxiv.org/abs/2503.20382) [[pdf]](https://arxiv.org/pdf/2503.20382) | Chunshan Li, Rong Wang, Xiaofei Yang et al. | IEEE transactions on circuits and systems for video technology (Print) |
| 2025 | [WKV-sharing embraced random shuffle RWKV high-order modeling for pan-sharpening](https://doi.org/10.52202/085713-4768) | Man Zhou, Xuan-Hua He, D. Hong et al. | Neural Information Processing Systems |
| 2025 | [Pan-Sharpening via Causal-Aware Feature Distribution Calibration](https://doi.org/10.1109/TGRS.2025.3576672) | Xue-Heng Li, Tao Hu, Ke Cao et al. | IEEE Transactions on Geoscience and Remote Sensing |
| 2025 | [RS3-RWKV: Leveraging RWKV for Efficient Remote Sensing Semantic Segmentation](https://doi.org/10.1109/JSTARS.2025.3624381) | Qing-Wang Wang, Hangwei Zhong, Chunxue Xu et al. | IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing |
| 2024-12 | [GDSR: Global-Detail Integration through Dual-Branch Network with Wavelet Losses for Remote Sensing Image Super-Resolution](https://arxiv.org/abs/2501.01460) [[pdf]](https://arxiv.org/pdf/2501.01460) | Qiwei Zhu, Kai Li, Guojing Zhang et al. | IEEE Transactions on Geoscience and Remote Sensing |

## 3D & Point Clouds

RWKV for point cloud learning, completion, semantic occupancy prediction and LiDAR place recognition.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-11 | [DAPointRWKV: Domain Adaptive Vision RWKV for Point Cloud Completion](https://arxiv.org/abs/2611.10353) [[pdf]](https://arxiv.org/pdf/2611.10353) | Yinghui Li, Qianyu Zhou, Hao Yang et al. | arXiv preprint |
| 2026-06 | [Efficient RWKV-based Representation Learning for 3D Point Clouds](https://arxiv.org/abs/2606.10395) [[pdf]](https://arxiv.org/pdf/2606.10395) | Yun Liu, Xuefeng Yan, Liangliang Nan et al. | arXiv preprint |
| 2026-06 | [PHMRNet: Persistent Homology Based Mamba–RWKV Network for LiDAR Place Recognition](https://doi.org/10.1109/LRA.2026.3683589) | De-Jing Zhou, Xin-Yu Jiang, Si-Tao Chen et al. | IEEE Robotics and Automation Letters |
| 2026-04 | [Serialized PointRWKV: A Serialized RWKV-Like Model Employing Feature-Based Masked Autoencoders for Point Cloud Analysis](https://doi.org/10.1109/JSEN.2026.3663650) | Zhi-Feng Rao, Ming-Kai Zheng | IEEE Sensors Journal |
| 2025-11 | [RWKV-PCSSC: Exploring RWKV Model for Point Cloud Semantic Scene Completion](https://arxiv.org/abs/2511.09878) [[pdf]](https://arxiv.org/pdf/2511.09878) | Wenzhe He, Xiaojun Chen, Wentang Chen et al. | ACM Multimedia |
| 2025-10 | [RWKV3D: An RWKV-Based Model with Multiple Training Strategies for Point Cloud Analysis](https://doi.org/10.1145/3746027.3755658) | Chenglong Sun, Shijie Pang, Yuzheng Wang et al. | ACM Multimedia |
| 2025-08 | [PointDGRWKV: Generalizing RWKV-like Architecture to Unseen Domains for Point Cloud Classification](https://arxiv.org/abs/2508.20835) [[pdf]](https://arxiv.org/pdf/2508.20835) | Hao Yang, Qianyu Zhou, Haijia Sun et al. | arXiv preprint |
| 2024-09 | [OccRWKV: Rethinking Efficient 3D Semantic Occupancy Prediction with Linear Complexity](https://arxiv.org/abs/2409.19987) [[pdf]](https://arxiv.org/pdf/2409.19987) | Junming Wang, Wei Yin, Xiaoxiao Long et al. | IEEE International Conference on Robotics and Automation |
| 2024-05 | [PointRWKV: Efficient RWKV-Like Model for Hierarchical Point Cloud Learning](https://arxiv.org/abs/2405.15214) [[pdf]](https://arxiv.org/pdf/2405.15214) | Qingdong He, Jiangning Zhang, Jinlong Peng et al. | AAAI Conference on Artificial Intelligence |

## Video & Action

Action recognition and detection, video editing, forgery localization and video captioning.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-07 | [MG-RWKV: Multi-Grained Context-Aware RWKV for Temporal Forgery Localization](https://arxiv.org/abs/2607.00902) [[pdf]](https://arxiv.org/pdf/2607.00902) | Jingchen Ni, Cangjin Yu, Dan Jiang et al. | arXiv preprint |
| 2026 | [Natural Cognizing Video: A Decoupling and Integration Network for General Event Boundary Captioning](https://doi.org/10.1109/TMM.2026.3651095) | Yutao Liu, Wan-Ru Xu, Zhen-Jiang Miao et al. | IEEE transactions on multimedia |
| 2025-11 | [Otter: Mitigating Background Distractions of Wide-Angle Few-Shot Action Recognition with Enhanced RWKV](https://arxiv.org/abs/2511.06741) [[pdf]](https://arxiv.org/pdf/2511.06741) | Wenbo Huang, Jinghui Zhang, Zhenghao Chen et al. | AAAI Conference on Artificial Intelligence |
| 2025-09 | [VRWKV-Editor: Reducing quadratic complexity in transformer-based video editing](https://arxiv.org/abs/2509.25998) [[pdf]](https://arxiv.org/pdf/2509.25998) | Abdelilah Aitrouga, Youssef Hmamouche, Amal El Fallah Seghrouchni | Multimedia Systems |
| 2024-11 | [Video RWKV:Video Action Recognition Based RWKV](https://arxiv.org/abs/2411.05636) [[pdf]](https://arxiv.org/pdf/2411.05636) | Zhuowen Yin, Chengru Li, Xingbo Dong | arXiv preprint |
| 2024-02 | [TLS-RWKV: Real-Time Online Action Detection with Temporal Label Smoothing](https://doi.org/10.1007/s11063-024-11540-0) | Ziqi Zhu, Wuchang Shao, Dongdong Jiao | Neural Processing Letters |

## Speech, Audio & Music

Speech recognition, enhancement, TTS, voice activity detection, audio tagging, speech compression and symbolic music.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-10 | [Frame-Wise Streaming for Efficient Learned Speech Compression](https://arxiv.org/abs/2610.21998) [[pdf]](https://arxiv.org/pdf/2610.21998) | Yuhan Liu, Jun Xu, Fengxi Zhang et al. | arXiv preprint |
| 2026-07 | [Low-Latency Streaming Target Speech Extraction for Edge Devices Using RWKV Linear Attention](https://doi.org/10.1109/ICICC71012.2026.11638014) | Hongcheng Li, Fan Li, Sirui Yu et al. | 2026 6th International Conference on Intelligent Communications and Computing (ICICC) |
| 2026-06 | [Pengembangan Sistem Generator MIDI Berbasis Web Menggunakan Arsitektur RWKV](https://doi.org/10.56211/sudo.v5i2.1777) | Yusfiana Yusfiana, Nahar Mardiyantoro, M. Hidayat | sudo Jurnal Teknik Informatika |
| 2025-09 | [AudioRWKV: Efficient and Stable Bidirectional RWKV for Audio Pattern Recognition](https://arxiv.org/abs/2509.02167) [[pdf]](https://arxiv.org/pdf/2509.02167) | Jing Wang, Maoxiang Wu, Jiayu Xiong et al. | arXiv preprint |
| 2025-08 | [REB-former: RWKV-enhanced E-branchformer for Speech Recognition](https://doi.org/10.21437/interspeech.2025-1343) | Jie Song, Wang Xiang, Jian Zhou et al. | Interspeech |
| 2025-06 | [Adaptable Symbolic Music Infilling with MIDI-RWKV](https://arxiv.org/abs/2506.13001) [[pdf]](https://arxiv.org/pdf/2506.13001) | Christian Zhou-Zheng, Philippe Pasquier | arXiv preprint |
| 2025-04 | [RWKVTTS: Yet another TTS based on RWKV-7](https://arxiv.org/abs/2504.03289) [[pdf]](https://arxiv.org/pdf/2504.03289) | Lin yueyu, Liu Xiao | arXiv preprint |
| 2024-09 | [Exploring Receptance Weighted Key Value Model for Single-Channel Speech Enhancement](https://doi.org/10.1109/ICICSP62589.2024.10809073) | Yuan-Le Li, Yi Zhou, Hong-Qing Liu | 2024 7th International Conference on Information Communication and Signal Processing (ICICSP) |
| 2024-09 | [Voice dialog system based on RWKV model](https://doi.org/10.1109/EIT63098.2024.10762107) | Tian-Xiang Zhao, Shihao Zan | IEEE International Conference on Electro/Information Technology |
| 2023-12 | [Advancing VAD Systems Based on Multi-Task Learning with Improved Model Structures](https://arxiv.org/abs/2312.14860) [[pdf]](https://arxiv.org/pdf/2312.14860) | Lingyun Zuo, Keyu An, Shiliang Zhang et al. | arXiv preprint |
| 2023-09 | [Exploring RWKV for Memory Efficient and Low Latency Streaming ASR](https://arxiv.org/abs/2309.14758) [[pdf]](https://arxiv.org/pdf/2309.14758) | Keyu An, Shiliang Zhang | arXiv preprint |

## Time Series & Forecasting

RWKV for forecasting (energy, weather, traffic), anomaly detection and time-series foundation models.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-10 | [HART: Hybrid Attention-RWKV Time series Foundation Model](https://arxiv.org/abs/2610.12883) [[pdf]](https://arxiv.org/pdf/2610.12883) | Qingwen Lin, Boyan Xu, Shifeng Xie et al. | arXiv preprint |
| 2026-10 | [RWKV-TS+: Adaptive Long-Range Prompt for Multiple Time Series Tasks](https://doi.org/10.1109/TKDE.2026.3717305) | Hua-Xin Pang, Xiao-Xia Xie, Yu Li et al. | IEEE Transactions on Knowledge and Data Engineering |
| 2026-06 | [RWKV-CVM: Gated Cross-Variate Mixing for Multivariate Power Load Forecasting](https://doi.org/10.3390/electricity7020058) | Adil Rizki, A. Echchatbi, Hamid Yantour | Electricity |
| 2026-05 | [FRWKV+: Periodic-Aware Adaptive Gating for Frequency-Space Linear Time Series Forecasting](https://arxiv.org/abs/2605.15690) [[pdf]](https://arxiv.org/pdf/2605.15690) | Qingyuan Yang, Dongyue Chen, Da Teng et al. | arXiv preprint |
| 2026-04 | [A novel TV-FEM-RWKV-TS hybrid framework for aging prediction of PEMFCs under static and quasi-dynamic conditions](https://doi.org/10.1016/j.ijhydene.2026.154588) | Wei Hu, Liu-Sheng Xiao, Kai-Yu Yang et al. | International journal of hydrogen energy |
| 2026-02 | [Pre-trained multi-scale RWKV-GCN for multivariate time series forecasting](https://doi.org/10.1038/s41598-026-41091-4) | Jian-Hua Hao, Fangai Liu, Weiwei Zhang | Scientific Reports |
| 2026 | [CEEMDAN–SSA–RWKV–SMA: A Robust Hybrid Model for Long-Term Wind Speed Forecasting in India](https://doi.org/10.14569/ijacsa.2026.0170335) | S. Vidya | International Journal of Advanced Computer Science and Applications |
| 2025-12 | [FRWKV:Frequency-Domain Linear Attention for Long-Term Time Series Forecasting](https://arxiv.org/abs/2512.07539) [[pdf]](https://arxiv.org/pdf/2512.07539) | Qingyuan Yang, Shizhuo Deng, Dongyue Chen et al. | arXiv preprint |
| 2025-12 | [RWKV-SKF: A recurrent architecture with state-space and frequency-domain filtering for dissolved oxygen predicting and revealing influencing mechanisms](https://doi.org/10.1016/j.ins.2025.123018) | Pei-Jian Zeng, Xing-Ming Liao, Jianhui Xu et al. | Information Sciences |
| 2025-10 | [μRWKV: A Memory-Efficient Model for Time-Series Prediction of Greenhouse Temperature and Energy Loads](https://doi.org/10.1109/IECON58223.2025.11221899) | Masaki Sakayori, Hiroaki Nishi | Annual Conference of the IEEE Industrial Electronics Society |
| 2025-08 | [Spatio-Temporal Weighted Graph Reason Learning for Multivariate Time-Series Anomaly Detection](https://doi.org/10.1109/JIOT.2025.3569316) | Hua-Qi Zhang, Hua-Xin Pang, Yu-Feng Zhao et al. | IEEE Internet of Things Journal |
| 2025-03 | [Linear attention based spatiotemporal multi graph GCN for traffic flow prediction](https://doi.org/10.1038/s41598-025-93179-y) | Yan-Ping Zhang, Wen-Jin Xu, Benjiang Ma et al. | Scientific Reports |
| 2025-03 | [BlackGoose Rimer: Harnessing RWKV-7 as a Simple yet Superior Replacement for Transformers in Large-Scale Time Series Modeling](https://arxiv.org/abs/2503.06121) [[pdf]](https://arxiv.org/pdf/2503.06121) | Li weile, Liu Xiao | arXiv preprint |
| 2024-09 | [Multi-scale RWKV with 2-Dimensional Temporal Convolutional Network for Short-term Photovoltaic Power Forecasting](https://doi.org/10.1016/j.energy.2024.133068) | Jian-Hua Hao, Fangai Liu, Weiwei Zhang | Energy |
| 2024-01 | [RWKV-TS: Beyond Traditional Recurrent Neural Network for Time Series Tasks](https://arxiv.org/abs/2401.09093) [[pdf]](https://arxiv.org/pdf/2401.09093) | Haowen Hou, F. Richard Yu | arXiv preprint |

## Reinforcement Learning & Robotics

Decision-making, manipulation, odometry, robot control and autonomous-driving planning built on RWKV.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-11 | [RWKV-TS for Underwater Robot Station Keeping from Ocean-Current-Disturbed Navigation Data](https://doi.org/10.64972/dea.2022.v1i1.4127d:84-99) | Ghassana Al-Marri, Hadi Al-Suhaimi | Data Engineering and Applications |
| 2026-06 | [ASSCG: Just-Right Gating over Chattering for Fast-Slow LLM Planning in Autonomous Driving](https://arxiv.org/abs/2606.25509) [[pdf]](https://arxiv.org/pdf/2606.25509) | Sining Ang, Yuan Chen, Liu Haiyan et al. | arXiv preprint |
| 2026-04 | [Belief-State RWKV for Reinforcement Learning under Partial Observability](https://arxiv.org/abs/2604.09671) [[pdf]](https://arxiv.org/pdf/2604.09671) | Liu Xiao | arXiv preprint |
| 2026-02 | [KAN We Flow? Advancing Robotic Manipulation with 3D Flow Matching via KAN & RWKV](https://arxiv.org/abs/2602.01115) [[pdf]](https://arxiv.org/pdf/2602.01115) | Zhihao Chen, Yiyuan Ge, Ziyang Wang et al. | IEEE International Conference on Robotics and Automation |
| 2025-09 | [RWKV-VIO: An Efficient and Low-Drift Visual–Inertial Odometry Using an End-to-End Deep Network](https://doi.org/10.3390/s25185737) | Jia-Xi Yang, Xiao-Ming Xu, Ze-Yuan Xu et al. | Italian National Conference on Sensors |
| 2025-04 | [Kinematic Modeling of a 7‐DOF Tendon‐Like‐Driven Robot Based on Optimization and Deep Learning](https://doi.org/10.1002/rob.22544) | Saixuan Chen, SaiHu Mu, Guan-Wu Jiang et al. | J. Field Robotics |
| 2024-07 | [Optimizing Robotic Manipulation with Decision-RWKV: A Recurrent Sequence Modeling Approach for Lifelong Learning](https://arxiv.org/abs/2407.16306) [[pdf]](https://arxiv.org/pdf/2407.16306) | Yujian Dong, Tianyu Wu, Chaoyang Song | Journal of Computing and Information Science in Engineering |

## Science, Engineering & Other Domains

Molecules and RNA, physics surrogates, wireless communication, network security, recommendation and industrial monitoring.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-10 | [A State Monitoring Method for Shear Hinges in Floating Slab Tracks Based on FMTF and PCNN-RWKV Fusion Network](https://doi.org/10.3390/s26206446) | Zhen-Yu Wang, Jian-Ming Zheng, Ming-Shun Yang | Italian National Conference on Sensors |
| 2026-07 | [One More Time: Revisiting Neural Quantum States from a Reinforcement Learning Perspective](https://arxiv.org/abs/2607.02292) [[pdf]](https://arxiv.org/pdf/2607.02292) | Juan Agustín Duque, Sergio García Heredia, Vinicius Hernandes et al. | arXiv preprint |
| 2026-06 | [Synergizing Global Pattern Learning and Time Order Characterization in Mobile Channel Prediction: An RWKV-Based Approach](https://arxiv.org/abs/2606.16170) [[pdf]](https://arxiv.org/pdf/2606.16170) | Zili Wang, Zirui Chen, Ridong Li et al. | ICC 2026 - IEEE International Conference on Communications |
| 2026-06 | [Fast and effective prediction of spatiotemporal nonlinear dynamics using the tailored RWKV architecture](https://doi.org/10.1088/2515-7647/ae79be) | J. Lee, Jincheol Kim | Journal of Physics: Photonics |
| 2026-05 | [A Protocol-Language Model for Network Intrusion (Without Deep Packet Inspection)](https://arxiv.org/abs/2606.00155) [[pdf]](https://arxiv.org/pdf/2606.00155) | Vivek Kumar Sharma | arXiv preprint |
| 2026-05 | [HMS-RWKV: A Hybrid Multi-Scale Model with Spatial-Temporal Adaptive Fusion for Efficient WiFi Sensing](https://doi.org/10.1109/ICC59461.2026.11586951) | Yi Liu, Zheng-Guo Sheng | ICC 2026 - IEEE International Conference on Communications |
| 2026-04 | [RWKV4Rec: RWKV-Based Personalized Sequential Recommendation Model](https://doi.org/10.1145/3810245) | Mengwei Yuan, Linkai Wan, Zengmin Xu et al. | ACM Transactions on Knowledge Discovery from Data |
| 2026-01 | [A method for detecting spatio-temporal correlation anomalies of WSN nodes based on topological information enhancement and time-frequency feature extraction](https://arxiv.org/abs/2601.11951) [[pdf]](https://arxiv.org/pdf/2601.11951) | Miao Ye, Ziheng Wang, Qiuxiang Jiang et al. | Computers, Materials &amp; Continua |
| 2026 | [Stable autoregressive modelling of supercontinuum generation: A 1D-RWKV surrogate model with physical constraints](https://doi.org/10.1016/j.optlastec.2026.116164) | Jin-Ho Lee, Jinchoel Kim | Optics &amp; Laser Technology |
| 2025-12 | [SemanticBBV: A Semantic Signature for Cross-Program Knowledge Reuse in Microarchitecture Simulation](https://arxiv.org/abs/2512.10231) [[pdf]](https://arxiv.org/pdf/2512.10231) | Zhenguo Liu, Chengao Shi, Chen Ding et al. | Asia and South Pacific Design Automation Conference |
| 2025-06 | [RWKV-IF: Efficient and Controllable RNA Inverse Folding via Attention-Free Language Modeling](https://doi.org/10.1101/2025.06.13.659654) | Gaoyuan Ji, Kefan Xu, Chuhong Zheng | bioRxiv |
| 2025-04 | [MolRWKV: Conditional Molecular Generation Model Using Local Enhancement and Graph Enhancement](https://doi.org/10.1002/jcc.70100) | Xihan Li, Kuan-Ping Gong, Yong-Quan Jiang et al. | Journal of Computational Chemistry |
| 2025-03 | [DREMnet: An Interpretable Denoising Framework for Semi-Airborne Transient Electromagnetic Signal](https://arxiv.org/abs/2503.22223) [[pdf]](https://arxiv.org/pdf/2503.22223) | Shuang Wang, Ming Guo, Xuben Wang et al. | IEEE Transactions on Geoscience and Remote Sensing |
| 2025-02 | [AutoGMM-RWKV: A Detecting Scheme Based on Attention Mechanisms Against Selective Forwarding Attacks in Wireless Sensor Networks](https://doi.org/10.1109/JIOT.2024.3484999) | Shihao Xie, Yi-Da Li, Yilun Ma et al. | IEEE Internet of Things Journal |
| 2024-10 | [Linear Attention Based Channel Estimation Scheme for V2X Communications](https://doi.org/10.1109/ICCIS63642.2024.10779439) | Qianyao Fu, Hongjie Yuan, Ya-Hui Hou et al. | International Conference Communication and Information Systems |

## Spiking & Quantum RWKV

Neuromorphic spiking RWKV language models and quantum-enhanced RWKV variants.

| Date | Paper | Authors | Venue |
| --- | --- | --- | --- |
| 2026-10 | [Compute-Optimal Scaling Laws for Spiking Language Models](https://arxiv.org/abs/2610.15146) [[pdf]](https://arxiv.org/pdf/2610.15146) | Dan Saunders, Benjamin Ren, Catherine He | arXiv preprint |
| 2025-06 | [Vision-QRWKV: Exploring Quantum-Enhanced RWKV Models for Image Classification](https://arxiv.org/abs/2506.06633) [[pdf]](https://arxiv.org/pdf/2506.06633) | Chi-Sheng Chen | arXiv preprint |
| 2025-05 | [Quantum-Enhanced Channel Mixing in RWKV Models for Time Series Forecasting](https://arxiv.org/abs/2505.13524) [[pdf]](https://arxiv.org/pdf/2505.13524) | Chi-Sheng Chen, En-Jui Kuo | arXiv preprint |
| 2025 | [SpikeRWKV:Energy-efficient Large Language Model with Spiking Neural Network](https://doi.org/10.65286/icic.v21i4.29534) | Yu-Lu Zhang | Poster Volume Ⅳ The 2025 Twenty-First International Conference on Intelligent Computing July 26-29, 2025 Ningbo, China |
| 2023-02 | [SpikeGPT: Generative Pre-trained Language Model with Spiking Neural Networks](https://arxiv.org/abs/2302.13939) [[pdf]](https://arxiv.org/pdf/2302.13939) | Rui-Jie Zhu, Qihang Zhao, Guoqi Li et al. | Trans. Mach. Learn. Res. |
