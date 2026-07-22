// client/src/App.tsx

import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { captureUtmParams } from './utils/whatsapp';
import HomePage from './pages/home';
import TreatmentPage from './pages/TreatmentPage';
import CorpoClinicoPage from './pages/CorpoClinicoPage';
import FAQPage from './pages/FAQPage';
import UrgenciasPage from './pages/UrgenciasPage';
import NotFoundPage from './pages/NotFoundPage';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidadePage';
import PoliticaCookiesPage from './pages/PoliticaCookiesPage';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import PatientsPage from './pages/admin/PatientsPage';
import DoctorsPage from './pages/admin/DoctorsPage';
import TreatmentsPage from './pages/admin/TreatmentsPage';
import PatientDetail from './pages/admin/PatientDetail';
import UsersManagement from './pages/admin/UsersManagement';

// Patient Pages
import PatientPortal from './pages/patient/PatientPortal';
import MyExams from './pages/patient/MyExams';
import MyTreatments from './pages/patient/MyTreatments';
import MyInvoices from './pages/patient/MyInvoices';

// Components
import Layout from './components/Layout';
import PatientProtectedRoute from './components/PatientProtectedRoute';
import CookieConsent from './components/cookies/CookieConsent';

// ============================================
// COMPONENTE PARA PROTEGER ROTAS ADMIN
// ============================================
const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('adminToken');

  if (!token) {
    return <Navigate to='/admin/login' replace />;
  }

  return <>{children}</>;
};

export default function App() {
  // Captura utm_source dos anúncios (Instagram/Facebook) na primeira visita.
  // A origem é anexada às mensagens de WhatsApp para atribuição de leads.
  useEffect(() => {
    captureUtmParams();
  }, []);

  return (
    <>
      <Routes>
        {/* ==================== ROTAS PUBLICAS COM LAYOUT ==================== */}
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/urgencias' element={<UrgenciasPage />} />
          <Route path='/tratamentos/:slug' element={<TreatmentPage />} />
          <Route path='/corpo-clinico' element={<CorpoClinicoPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route
            path='/politica-privacidade'
            element={<PoliticaPrivacidadePage />}
          />
          <Route path='/politica-cookies' element={<PoliticaCookiesPage />} />

          {/* ---------- Redirects 301 lógicos ----------
              Variantes que as pessoas escrevem e que outros sites já linkam.
              Todos apontam para o canónico /urgencias — nunca duplicar a página. */}
          <Route
            path='/urgencias-dentarias'
            element={<Navigate to='/urgencias' replace />}
          />
          <Route
            path='/urgencia-dentaria'
            element={<Navigate to='/urgencias' replace />}
          />
          <Route
            path='/emergency'
            element={<Navigate to='/urgencias' replace />}
          />
          <Route
            path='/dental-emergency'
            element={<Navigate to='/urgencias' replace />}
          />

          {/* Slugs de tratamentos que o rodapé antigo linkava e não existem */}
          <Route
            path='/tratamentos/implantes-dentarios'
            element={<Navigate to='/tratamentos/implantologia' replace />}
          />
          <Route
            path='/tratamentos/branqueamento-dentario'
            element={<Navigate to='/tratamentos/estetica-dentaria' replace />}
          />

          {/* ---------- Consolidação de tratamentos redundantes ----------
              Havia 8 páginas a descrever 4 especialidades. Cada par
              canibalizava-se no Google. Sobrevive o termo que o doente
              escreve na pesquisa; o jargão da especialidade redireciona. */}
          <Route
            path='/tratamentos/dentisteria'
            element={<Navigate to='/tratamentos/caries' replace />}
          />
          <Route
            path='/tratamentos/prostodontia'
            element={<Navigate to='/tratamentos/proteses-dentarias' replace />}
          />
          <Route
            path='/tratamentos/aparelhos-dentarios'
            element={<Navigate to='/tratamentos/ortodontia' replace />}
          />
          <Route
            path='/tratamentos/criancas'
            element={<Navigate to='/tratamentos/odontopediatria' replace />}
          />

          {/* ---------- Lista oficial de especialidades (Jul/2026) ----------
              O corpo clínico consolidou a oferta em 10 áreas. As 4 páginas
              descontinuadas redirecionam para a especialidade remanescente
              mais próxima — preserva o SEO já indexado e links externos. */}
          <Route
            path='/tratamentos/reabilitacao-oral'
            element={<Navigate to='/tratamentos/proteses-dentarias' replace />}
          />
          <Route
            path='/tratamentos/cirurgia-oral'
            element={<Navigate to='/tratamentos/implantologia' replace />}
          />
          <Route
            path='/tratamentos/medicina-oral'
            element={<Navigate to='/tratamentos/caries' replace />}
          />
          <Route
            path='/tratamentos/oclusao'
            element={<Navigate to='/tratamentos/proteses-dentarias' replace />}
          />

          {/* ---------- Aliases de campanha (Instagram/Facebook Ads) ----------
              URLs curtas e memoráveis para anúncios. O termo comercial que o
              paciente reconhece aponta para a página canónica da especialidade.
              Ex.: centrodentariocolombo.com/tratamentos/invisalign */}
          <Route
            path='/tratamentos/invisalign'
            element={<Navigate to='/tratamentos/ortodontia' replace />}
          />
          <Route
            path='/tratamentos/facetas'
            element={<Navigate to='/tratamentos/estetica-dentaria' replace />}
          />
          <Route
            path='/tratamentos/limpeza-dentaria'
            element={<Navigate to='/tratamentos/higiene-oral' replace />}
          />
          <Route
            path='/tratamentos/destartarizacao'
            element={<Navigate to='/tratamentos/higiene-oral' replace />}
          />
          <Route
            path='/tratamentos/harmonizacao-facial'
            element={
              <Navigate to='/tratamentos/harmonizacao-orofacial' replace />
            }
          />

          {/* ==================== 404 REAL ==================== */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>

        {/* ==================== ADMIN LOGIN (SEM LAYOUT) ==================== */}
        <Route path='/admin/login' element={<AdminLogin />} />

        {/* ==================== ROTAS ADMIN (PROTEGIDAS - SEM LAYOUT) ==================== */}
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path='/admin/patients'
          element={
            <ProtectedAdminRoute>
              <PatientsPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path='/admin/patients/:id'
          element={
            <ProtectedAdminRoute>
              <PatientDetail />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path='/admin/doctors'
          element={
            <ProtectedAdminRoute>
              <DoctorsPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path='/admin/treatments'
          element={
            <ProtectedAdminRoute>
              <TreatmentsPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path='/admin/users'
          element={
            <ProtectedAdminRoute>
              <UsersManagement />
            </ProtectedAdminRoute>
          }
        />

        {/* ==================== ROTAS PATIENT (PROTEGIDAS - SEM LAYOUT) ==================== */}
        <Route
          path='/patient/portal'
          element={
            <PatientProtectedRoute>
              <PatientPortal />
            </PatientProtectedRoute>
          }
        />
        <Route
          path='/patient/exams'
          element={
            <PatientProtectedRoute>
              <MyExams />
            </PatientProtectedRoute>
          }
        />
        <Route
          path='/patient/treatments'
          element={
            <PatientProtectedRoute>
              <MyTreatments />
            </PatientProtectedRoute>
          }
        />
        <Route
          path='/patient/invoices'
          element={
            <PatientProtectedRoute>
              <MyInvoices />
            </PatientProtectedRoute>
          }
        />
      </Routes>

      {/* ==================== COOKIE CONSENT ==================== */}
      <CookieConsent />
    </>
  );
}
