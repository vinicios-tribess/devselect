package tech.devselect.data.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import tech.devselect.data.entity.Pessoa;

public class PessoaDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private Long idPessoa;
	private String nomePessoa;
	private String cpfPessoa;
	private String rgPessoa;
	private EnderecoDTO enderecoPessoa;
	private String emailPessoa;
	private String telefonePessoa;
	private LocalDate dataNascPessoa;
	private String generoPessoa;
	private int matchesPessoa;
	private CursoDTO cursoPessoa;
	private List<String> caracteristicasPessoa = new ArrayList<>();
	
	public PessoaDTO() { }

	public PessoaDTO(Long idPessoa, String nomePessoa, String cpfPessoa, String rgPessoa, EnderecoDTO enderecoPessoa,
			String emailPessoa, String telefonePessoa, LocalDate dataNascPessoa, String generoPessoa, int matchesPessoa,
			CursoDTO cursoPessoa, List<String> caracteristicasPessoa) {
		super();
		this.idPessoa = idPessoa;
		this.nomePessoa = nomePessoa;
		this.cpfPessoa = cpfPessoa;
		this.rgPessoa = rgPessoa;
		this.enderecoPessoa = enderecoPessoa;
		this.emailPessoa = emailPessoa;
		this.telefonePessoa = telefonePessoa;
		this.dataNascPessoa = dataNascPessoa;
		this.generoPessoa = generoPessoa;
		this.matchesPessoa = matchesPessoa;
		this.cursoPessoa = cursoPessoa;
		this.caracteristicasPessoa = caracteristicasPessoa;
	}

	public Pessoa convertToEntity() {
	return new Pessoa(
			getIdPessoa(), getNomePessoa(), getCpfPessoa(), 
			getRgPessoa(), getEnderecoPessoa().convertToEntity(), getEmailPessoa(), 
			getTelefonePessoa(), getDataNascPessoa(), getGeneroPessoa(), 
			getMatchesPessoa(), getCursoPessoa().convertToEntity(), getCaracteristicasPessoa());
	}

	public Long getIdPessoa() {
		return idPessoa;
	}

	public void setIdPessoa(Long idPessoa) {
		this.idPessoa = idPessoa;
	}

	public String getNomePessoa() {
		return nomePessoa;
	}

	public void setNomePessoa(String nomePessoa) {
		this.nomePessoa = nomePessoa;
	}

	public String getCpfPessoa() {
		return cpfPessoa;
	}

	public void setCpfPessoa(String cpfPessoa) {
		this.cpfPessoa = cpfPessoa;
	}

	public String getRgPessoa() {
		return rgPessoa;
	}

	public void setRgPessoa(String rgPessoa) {
		this.rgPessoa = rgPessoa;
	}

	public String getEmailPessoa() {
		return emailPessoa;
	}

	public void setEmailPessoa(String emailPessoa) {
		this.emailPessoa = emailPessoa;
	}

	public String getTelefonePessoa() {
		return telefonePessoa;
	}

	public void setTelefonePessoa(String telefonePessoa) {
		this.telefonePessoa = telefonePessoa;
	}

	public LocalDate getDataNascPessoa() {
		return dataNascPessoa;
	}

	public void setDataNascPessoa(LocalDate dataNascPessoa) {
		this.dataNascPessoa = dataNascPessoa;
	}

	public String getGeneroPessoa() {
		return generoPessoa;
	}

	public void setGeneroPessoaa(String generoPessoaPessoa) {
		this.generoPessoa = generoPessoaPessoa;
	}

	public int getMatchesPessoa() {
		return matchesPessoa;
	}

	public void setMatchesPessoa(int matchesPessoa) {
		this.matchesPessoa = matchesPessoa;
	}

	public CursoDTO getCursoPessoa() {
		return cursoPessoa;
	}

	public void setCursoPessoa(CursoDTO cursoPessoa) {
		this.cursoPessoa = cursoPessoa;
	}

	public List<String> getCaracteristicasPessoa() {
		return caracteristicasPessoa;
	}

	public void setCaracteristicasPessoa(List<String> caracteristicasPessoa) {
		this.caracteristicasPessoa = caracteristicasPessoa;
	}

	public EnderecoDTO getEnderecoPessoa() {
		return enderecoPessoa;
	}

	public void setEnderecoPessoa(EnderecoDTO enderecoPessoa) {
		this.enderecoPessoa = enderecoPessoa;
	}
	
}