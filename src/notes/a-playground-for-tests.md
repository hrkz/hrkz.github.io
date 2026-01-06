---
title: A "simple" testing playground
author: Hugo Frezat
description: >
  This is a placeholder note that I am using for tests and has been particularly useful when styling the page.
  Obviously, it will be removed as soon as a first "real" note is ready.
pubDate: 2025-02-06
tags: ["astro", "placeholder"]
---

**An example abstract:** In this paper, we propose a generic algorithm to train machine learning-based subgrid parametrizations online, i.e., with 
_a posteriori_ loss functions, but for non-differentiable numerical solvers. The proposed approach leverages a neural emulator to approximate the 
reduced state-space solver, which is then used to allow gradient propagation through temporal integration steps. We apply this methodology on a single 
layer quasi-geostrophic system with topography, known to be highly unstable in around 500 temporal iterations with offline strategies. Using our 
algorithm, we are able to train a parametrization that recovers most of the benefits of online strategies without having to compute the gradient of 
the original solver. It is demonstrated that training the neural emulator and parametrization components separately with different loss quantities 
is necessary in order to minimize the propagation of approximation biases. Experiments on emulator architectures with different complexities also 
indicates that emulator performance is key in order to learn an accurate parametrization. This work is a step towards learning parametrization with 
online strategies for weather models. 

**Key words** : quasi-geostrophic turbulence, subgrid-scale model, machine learning

<hr />

### Contents

### Introduction

> _This is an extract from a published paper._

In turbulent flows, the energy cascade drives energy from the large scales to the small scales until molecular viscous dissipation (forward-scatter), 
but the inverse transfer called backscatter in which energy is transferred from the small scales back to the large scales 
([Lesieur & Metais, 1996](https://www.doi.org/10.1146/annurev.fl.28.010196.000401)) is also in play, particularly for geophysical flows. This is 
explained by the relative dominance of the Coriolis force which creates vortical structures that appear two-dimensional. Historically, developing SGS 
models that account for backscatter is a challenging task ([Piomelli et al., 1991](https://www.doi.org/10.1063/1.857956); 
[Schumann, 1995](https://www.doi.org/10.1098/rspa.1995.0126); [Liu et al., 2011](https://www.doi.org/10.1016/j.physleta.2011.05.023)). Indeed, an 
overprediction of backscatter that can not be compensated by eddy-viscosity will lead to an accumulation of small-scale energy causing simulations to 
become numerically unstable. In two-dimensional flows, we observe a dual cascade composed of “forward” enstrophy and “inverse” energy, in a :
statistical sense. As a consequence, a large number of SGS models have been proposed in particular for geophysical flows (see 
[Danilov et al. 2019](https://www.doi.org/10.1007/978-3-030-05704-6_5) for a review) with well-documented configurations and performance metrics 
([Fox-Kemper & Menemenlis, 2008](https://www.doi.org/10.1029/177GM19)). SGS modeling is also a key issue for the simulation of ocean and atmosphere 
dynamics because of the large range of motions involved ([Jansen et al., 2015](https://www.doi.org/10.1016/j.ocemod.2015.07.015); 
[Juricke et al., 2020](https://www.doi.org/10.1029/2019MS001855); [Frederiksen et al., 2012](https://www.doi.org/10.1088/0031-8949/85/06/068202)). 
As a case study framework, we consider barotropic QG flows. While providing an approximate yet representative system for rotating stratified flows 
found in the atmosphere and ocean dynamics, it involves relatively complex SGS features that make the learning problem non-trivial. As such, QG flows 
are regarded as an ideal playground to explore and assess the relevance of machine learning strategies for SGS models in geophysical turbulence. The 
governing equations of direct vorticity $\omega$ for the QG model with bottom topography $\eta$ are

$$
\begin{align}
  \dfrac{\partial \omega}{\partial t} + \mathcal{N}(\omega + \eta, \psi) &= \nu \nabla^{2} \omega  - \mu \omega - \beta \partial_{x} \psi + F_{\omega},\\
  \nabla^{2}\psi &= -\omega.
\end{align}
$$

### Other relevant elements

> _This is an image also extracted from my last submitted paper._

<figure>
  <img src="https://arxiv.org/html/2310.19385v4/extracted/5954069/figures/topo-vorticity-fields.png" alt="" />
  <figcaption>
    Figure 1: Direct vorticity fields (left), reduced vorticity fields (middle) and SGS term (right) at the 
    end of a testing horizon (24000 temporal iterations) from the direct simulation.
  </figcaption>
</figure>

The figure elements can also be described in a table

| Left             | Middle            | Right           |
| :--------------- | :---------------: | --------------: |
| Direct vorticity | Reduced vorticity | SGS term        |
| $\omega$         | $\bar{\omega}$    | $\tau_{\omega}$ |

or as a list

1. Direct vorticity $\omega$.
2. Reduced vorticity $\bar{\omega}$.
3. SGS term $\tau_{\omega}$.

<details>
<summary>This is a sample "hidden" section with Python code (taken from NumPy's documentation)</summary>

For example, you can create an array from a regular Python list or tuple using the array function. The type of the resulting array is deduced from the type of the elements in the sequences.

```python
import numpy as np

a = np.array([1, 2, 3])
```
</details>
