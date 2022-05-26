package tech.devselect.data.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import tech.devselect.data.dto.CursoDTO;

@Entity
public class Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_curso", updatable = false, nullable = false)
	private Long id;

	@Column(nullable = false)
	private String nome;

	@Column(nullable = false)
	private String duracao;

	@Column(nullable = false)
	private String local;

	@Column(nullable = false)
	private int quantidadeVagas;

	@Column(nullable = false)
	private String turno;

	private String descricaoCurso;

	@ElementCollection
	private List<String> caracteristicas = new ArrayList<>();

//	@OneToOne
//	private Match match;

	public Curso() {
	}

	public Curso(Long id, String nome, String duracao, String local, int quantidadeVagas, String turno,
			String descricaoCurso, List<String> caracteristicas) {
		super();
		this.id = id;
		this.nome = nome;
		this.duracao = duracao;
		this.local = local;
		this.quantidadeVagas = quantidadeVagas;
		this.turno = turno;
		this.descricaoCurso = descricaoCurso;
		this.caracteristicas = caracteristicas;
	}
	
	public CursoDTO getDTO() {
		return new CursoDTO(getId(), getNome(), getDuracao(), getLocal(),
				getQuantidadeVagas(), getTurno(), getDescricaoCurso(), getCaracteristicas());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDuracao() {
		return duracao;
	}

	public void setDuracao(String duracao) {
		this.duracao = duracao;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public int getQuantidadeVagas() {
		return quantidadeVagas;
	}

	public void setQuantidadeVagas(int quantidadeVagas) {
		this.quantidadeVagas = quantidadeVagas;
	}

	public String getTurno() {
		return turno;
	}

	public void setTurno(String turno) {
		this.turno = turno;
	}

	public String getDescricaoCurso() {
		return descricaoCurso;
	}

	public void setDescricaoCurso(String descricaoCurso) {
		this.descricaoCurso = descricaoCurso;
	}

	public List<String> getCaracteristicas() {
		return caracteristicas;
	}

	public void setCaracteristicas(List<String> caracteristicas) {
		this.caracteristicas = caracteristicas;
	}

}
