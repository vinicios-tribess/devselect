package tech.devselect.data.dto;

import java.util.ArrayList;
import java.util.List;

import tech.devselect.data.entity.Curso;

public class CursoDTO {
	
	private Long idCurso;
	private String nomeCurso;
	private String duracaoCurso;
	private String localCurso;
	private int quantidadeVagasCurso;
	private String turnoCurso;
	private String descricaoCursoCurso;
	private List<String> caracteristicasCurso = new ArrayList<>();
	
	public CursoDTO() {	}

	public CursoDTO(Long idCurso, String nomeCurso, String duracaoCurso, String localCurso, int quantidadeVagasCurso,
			String turnoCurso, String descricaoCursoCurso, List<String> caracteristicasCurso) {
		super();
		this.idCurso = idCurso;
		this.nomeCurso = nomeCurso;
		this.duracaoCurso = duracaoCurso;
		this.localCurso = localCurso;
		this.quantidadeVagasCurso = quantidadeVagasCurso;
		this.turnoCurso = turnoCurso;
		this.descricaoCursoCurso = descricaoCursoCurso;
		this.caracteristicasCurso = caracteristicasCurso;
	}
	
	public Curso convertToEntity() {
	return new Curso(getIdCurso(), 
					getNomeCurso(),
					getDuracaoCurso(),
					getLocalCurso(),
					getQuantidadeVagasCurso(),
					getTurnoCurso(),
					getDescricaoCursoCurso(),
					getCaracteristicasCurso());
	}

	public Long getIdCurso() {
		return idCurso;
	}

	public void setIdCurso(Long idCurso) {
		this.idCurso = idCurso;
	}

	public String getNomeCurso() {
		return nomeCurso;
	}

	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}

	public String getDuracaoCurso() {
		return duracaoCurso;
	}

	public void setDuracaoCurso(String duracaoCurso) {
		this.duracaoCurso = duracaoCurso;
	}

	public String getLocalCurso() {
		return localCurso;
	}

	public void setLocalCurso(String localCurso) {
		this.localCurso = localCurso;
	}

	public int getQuantidadeVagasCurso() {
		return quantidadeVagasCurso;
	}

	public void setQuantidadeVagasCurso(int quantidadeVagasCurso) {
		this.quantidadeVagasCurso = quantidadeVagasCurso;
	}

	public String getTurnoCurso() {
		return turnoCurso;
	}

	public void setTurnoCurso(String turnoCurso) {
		this.turnoCurso = turnoCurso;
	}

	public String getDescricaoCursoCurso() {
		return descricaoCursoCurso;
	}

	public void setDescricaoCursoCurso(String descricaoCursoCurso) {
		this.descricaoCursoCurso = descricaoCursoCurso;
	}

	public List<String> getCaracteristicasCurso() {
		return caracteristicasCurso;
	}

	public void setCaracteristicasCurso(List<String> caracteristicasCurso) {
		this.caracteristicasCurso = caracteristicasCurso;
	}
	
	
	

}
