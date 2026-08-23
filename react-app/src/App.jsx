import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';

import PortfolioHome from './pages/Portfolio/PortfolioHome';
import Animation from './pages/Portfolio/Animation';
import HomerEvolution from './pages/Portfolio/HomerEvolution';
import ThreeDWalkCycle from './pages/Portfolio/ThreeDWalkCycle';
import LipSync from './pages/Portfolio/LipSync';
import PortfolioDesign from './pages/Portfolio/PortfolioDesign';
import RockCreativeAgency from './pages/Portfolio/RockCreativeAgency';
import AbsaNextGen from './pages/Portfolio/AbsaNextGen';
import IstylaSenkosi from './pages/Portfolio/IstylaSenkosi';
import Essays from './pages/Portfolio/Essays';

import BlogsHome from './pages/Blogs/BlogsHome';
import Blog1 from './pages/Blogs/Blog1';
import Blog2 from './pages/Blogs/Blog2';
import Blog3 from './pages/Blogs/Blog3';
import Blog4 from './pages/Blogs/Blog4';
import Blog5 from './pages/Blogs/Blog5';
import Blog6 from './pages/Blogs/Blog6';
import Blog7 from './pages/Blogs/Blog7';
import Blog8 from './pages/Blogs/Blog8';
import Blog9 from './pages/Blogs/Blog9';
import Blog10 from './pages/Blogs/Blog10';
import Blog11 from './pages/Blogs/Blog11';
import Blog12 from './pages/Blogs/Blog12';
import Reflections from './pages/Blogs/Reflections';

import DesignHome from './pages/Design/DesignHome';
import Wireframes from './pages/Design/Wireframes';
import DesignResearch from './pages/Design/DesignResearch';
import DesignInspiration from './pages/Design/DesignInspiration';
import StyleGuides from './pages/Design/StyleGuides';
import StyleProcessDocumentation from './pages/Design/StyleProcessDocumentation';
import IxDProcessDocumentation from './pages/Design/IxDProcessDocumentation';

import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<PortfolioHome />} />
        <Route path="/portfolio/animation" element={<Animation />} />
        <Route path="/portfolio/animation/homer-evolution" element={<HomerEvolution />} />
        <Route path="/portfolio/animation/3d-walk-cycle" element={<ThreeDWalkCycle />} />
        <Route path="/portfolio/animation/lip-sync" element={<LipSync />} />
        <Route path="/portfolio/design" element={<PortfolioDesign />} />
        <Route path="/portfolio/design/rock-creative-agency" element={<RockCreativeAgency />} />
        <Route path="/portfolio/design/absa-nextgen" element={<AbsaNextGen />} />
        <Route path="/portfolio/design/istyla-senkosi" element={<IstylaSenkosi />} />
        <Route path="/portfolio/essays" element={<Essays />} />

        <Route path="/blogs" element={<BlogsHome />} />
        <Route path="/blogs/1" element={<Blog1 />} />
        <Route path="/blogs/2" element={<Blog2 />} />
        <Route path="/blogs/3" element={<Blog3 />} />
        <Route path="/blogs/4" element={<Blog4 />} />
        <Route path="/blogs/5" element={<Blog5 />} />
        <Route path="/blogs/6" element={<Blog6 />} />
        <Route path="/blogs/7" element={<Blog7 />} />
        <Route path="/blogs/8" element={<Blog8 />} />
        <Route path="/blogs/9" element={<Blog9 />} />
        <Route path="/blogs/10" element={<Blog10 />} />
        <Route path="/blogs/11" element={<Blog11 />} />
        <Route path="/blogs/12" element={<Blog12 />} />
        <Route path="/blogs/reflections" element={<Reflections />} />

        <Route path="/design" element={<DesignHome />} />
        <Route path="/design/wireframes" element={<Wireframes />} />
        <Route path="/design/research" element={<DesignResearch />} />
        <Route path="/design/inspiration" element={<DesignInspiration />} />
        <Route path="/design/style-guides" element={<StyleGuides />} />
        <Route path="/design/style-process" element={<StyleProcessDocumentation />} />
        <Route path="/design/ixd-process" element={<IxDProcessDocumentation />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
