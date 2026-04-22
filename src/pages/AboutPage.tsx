export function AboutPage() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <header className="card" style={{ padding: 22 }}>
        <span className="chip">👋 Profile</span>
        <h1 style={{ margin: '14px 0 8px', letterSpacing: '-0.03em' }}>
          황시준
        </h1>
        <p className="muted" style={{ margin: 0, maxWidth: 78 + 'ch' }}>
          협업과 소통을 매우 중요한 가치로 여기며, 개발·보안·인프라를 모두 배우고자
          하는 의지가 강합니다. 꾸준한 노력과 열정을 토대로 성장하는 인재가 되고
          싶습니다.
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
          <a className="btn primary" href="mailto:ghkdtlwns987@naver.com">
            📧 ghkdtlwns987@naver.com
          </a>
          <a className="btn" href="tel:01048282771">
            📱 010-4828-2771
          </a>
          <a
            className="btn"
            href="https://github.com/junesi513"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="card" style={{ padding: 22 }}>
        <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>🎫 자격증</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>
              AWS Certified Solutions Architect – Associate
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              취득일: 2023/10/21 · 등록 번호: 461973410
            </div>
            <div style={{ marginTop: 10 }}>
              <a
                className="btn"
                href="https://www.credly.com/badges/c8dfe38a-1b94-428f-baf0-2132969ad151/public_url"
                target="_blank"
                rel="noreferrer"
              >
                Credly 확인
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>Certified Kubernetes Administrator (CKA)</div>
            <div className="muted" style={{ marginTop: 6 }}>
              취득일: 2023/12/29 · 등록 번호: LF-ivspgcpjbv
            </div>
            <div style={{ marginTop: 10 }}>
              <a
                className="btn"
                href="https://www.credly.com/badges/c1610388-ea88-40b1-8ad0-eb7bf8f667ab"
                target="_blank"
                rel="noreferrer"
              >
                Credly 확인
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="card" style={{ padding: 22 }}>
        <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>🏃 활동 내역</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>Hacker Login 동아리 운영진</div>
            <div className="muted" style={{ marginTop: 6 }}>2022.03 ~ 2022.12</div>
          </div>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>
              차세대 보안리더 양성 프로그램 10기 (취약점 분석 트랙)
            </div>
            <div className="muted" style={{ marginTop: 6 }}>2021.07.01 ~ 2022.03.31</div>
            <div className="muted" style={{ marginTop: 10 }}>
              진행 프로젝트: 언리얼엔진 취약점 분석 프로젝트
            </div>
          </div>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>SW 마이스터 고등학교 정보보안 강사</div>
            <div className="muted" style={{ marginTop: 6 }}>2022.01 ~ 2023.07</div>
            <div className="muted" style={{ marginTop: 10 }}>
              Vmware 인프라 구축, 취약점 진단/보안, iptables 방화벽, 네트워크 기초,
              Pwnable/Web/Reversing 강의, 기능경기대회 대비 등
            </div>
            <div className="muted" style={{ marginTop: 10 }}>
              주요 성과: 2022·2023 기능경기대회(사이버보안) 다수 수상, 2023 국제 올림픽 출전
            </div>
          </div>
        </div>
      </section>

      <section className="card" style={{ padding: 22 }}>
        <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>🏆 수상 내역</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>정보보안 웹 서비스 경진대회 · 대상</div>
            <div className="muted" style={{ marginTop: 6 }}>
              2022.09.16 · 팀: 고점에 사람있어요 · 기관: 한국 남부발전(KOSPO)
            </div>
            <div className="muted" style={{ marginTop: 10 }}>
              웹 서비스 취약점 발굴 및 대응
            </div>
          </div>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>
              인공지능 학습용 데이터 구축 해커톤 경진대회 · 장려상
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              2022.09.29 · 기관: (주)비온시이노베이터
            </div>
            <div className="muted" style={{ marginTop: 10 }}>
              CNN 신경망을 통한 화재 탐지
            </div>
          </div>
          <div className="card" style={{ padding: 16, background: 'transparent', boxShadow: 'none' }}>
            <div style={{ fontWeight: 750 }}>
              사이버보안 컨퍼런스 침해대응/분석 경진대회 · 우수상
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              2022.09.30 · 팀: 고점에 사람있어요 · 기관: 한국전력
            </div>
            <div className="muted" style={{ marginTop: 10 }}>
              서버 구축, 웹 취약점 점검/보안, 침해사고 대응·분석, 악성코드 분석, NFV 구축
            </div>
          </div>
        </div>
      </section>

      <section className="card" style={{ padding: 22 }}>
        <h2 style={{ margin: 0, letterSpacing: '-0.02em' }}>🏴 English</h2>
        <div style={{ marginTop: 12 }}>
          <span className="chip">
            OPIc · 2023.09.03 · IM2 · 2G5949320302
          </span>
        </div>
      </section>
    </div>
  )
}

