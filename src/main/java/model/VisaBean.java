package model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "visa")
public class VisaBean implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer mId;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vId;
	
	private String vAccount;
	
	public VisaBean() {
	}

	public VisaBean(Integer mId, Integer vId, String vAccount) {
		this.mId = mId;
		this.vId = vId;
		this.vAccount = vAccount;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public Integer getvId() {
		return vId;
	}

	public void setvId(Integer vId) {
		this.vId = vId;
	}

	public String getvAccount() {
		return vAccount;
	}

	public void setvAccount(String vAccount) {
		this.vAccount = vAccount;
	}

	@Override
	public String toString() {
		return "VisaBean [mId=" + mId + ", vId=" + vId + ", vAccount=" + vAccount + "]";
	}


}
