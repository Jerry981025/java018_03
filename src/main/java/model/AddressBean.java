package model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "address")
public class AddressBean implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer mId; 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer aId;
	private String Address;

	public AddressBean() {
	}

	public AddressBean(Integer mId, Integer aId, String Address) {
		this.mId = mId;
		this.aId = aId;
		this.Address = Address;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public Integer getaId() {
		return aId;
	}

	public void setaId(Integer aId) {
		this.aId = aId;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String Address) {
		this.Address = Address;
	}


}
