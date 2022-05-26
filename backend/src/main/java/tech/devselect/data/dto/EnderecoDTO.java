package tech.devselect.data.dto;

import tech.devselect.data.entity.Endereco;

public class EnderecoDTO {

	private String cepPessoa;
	private String logradouroPessoa;
	private String numeroPessoa;
	private String bairroPessoa;
	private String cidadePessoa;
	private String estadoPessoa;
	
	public EnderecoDTO() { }

	public EnderecoDTO(String cepPessoa, String logradouroPessoa, String numeroPessoa, String bairroPessoa,
			String cidadePessoa, String estadoPessoa) {
		super();
		this.cepPessoa = cepPessoa;
		this.logradouroPessoa = logradouroPessoa;
		this.numeroPessoa = numeroPessoa;
		this.bairroPessoa = bairroPessoa;
		this.cidadePessoa = cidadePessoa;
		this.estadoPessoa = estadoPessoa;
	}
	
	public Endereco convertToEntity() {
	return new Endereco(
			getCepPessoa(), getLogradouroPessoa(), getNumeroPessoa(),
			getBairroPessoa(), getCidadePessoa(), getEstadoPessoa());
	}

	public String getCepPessoa() {
		return cepPessoa;
	}

	public void setCepPessoa(String cepPessoa) {
		this.cepPessoa = cepPessoa;
	}

	public String getLogradouroPessoa() {
		return logradouroPessoa;
	}

	public void setLogradouroPessoa(String logradouroPessoa) {
		this.logradouroPessoa = logradouroPessoa;
	}

	public String getNumeroPessoa() {
		return numeroPessoa;
	}

	public void setNumeroPessoa(String numeroPessoa) {
		this.numeroPessoa = numeroPessoa;
	}

	public String getBairroPessoa() {
		return bairroPessoa;
	}

	public void setBairroPessoa(String bairroPessoa) {
		this.bairroPessoa = bairroPessoa;
	}

	public String getCidadePessoa() {
		return cidadePessoa;
	}

	public void setCidadePessoa(String cidadePessoa) {
		this.cidadePessoa = cidadePessoa;
	}

	public String getEstadoPessoa() {
		return estadoPessoa;
	}

	public void setEstadoPessoa(String estadoPessoa) {
		this.estadoPessoa = estadoPessoa;
	}
	
}